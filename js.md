```mermaid
flowchart TB
  subgraph HOST[Browser / Node.js]
    A[Load JS File]
    B[Resolve Imports / Modules]
    C[Schedule Execution]
    D[Event Loop / IO]
  end

  subgraph ENGINE[JavaScript Engine V8, etc]
    E[Parse -> AST]
    F[Compile -> Bytecode]
    G[Interpreter]
    H[JIT Optimizer]
    I[Heap]
    J[Call Stack]
    K[Garbage Collector]
  end

  A --> B --> E
  E --> F --> G
  G --> H
  G --> J
  J --> I
  K --> I
  D --> J

```

![image-20260127093750385](C:\Users\USUARIO\AppData\Roaming\Typora\typora-user-images\image-20260127093750385.png)

LibUV: C++ lib eneble event driven Arch

process and a thread

a process is a simple running program. Every app you open whether it is a browser, a text editor or a server is a process. Inside a process, we have threads which are resposible executing task.  

So what is the difference? 

A process has its own memory space and resources. A thread is a smaller unit inside a process that actually executes the code. Threads share memory within the same process

Example: 
A restaurant is a process has all resources (kitchen, menu, tables, waiters), while waiters (threads) handle customer orders.

In multi-threaded systems multiple threads can handle concurrently allowing task to execute in parallel. but in a single threaded model only thread code execute code at a time. Imadine a kitchen with only one cheff a single  thread. Now if the chef is chopping vegetables, they cannot stir a soup or bake a cake at the same time. Similarly in a single thread environment, the program must finish one task before moving to the next. think of a process as a restaurant and threads as waiters

The restaurant or process has all the resources (kitchen, tables menu) while waiters (threads) handle orders bringing food to ordes. 



Since, there is only one thread javascript uses **call stack** to keep track of function execution. so when a function is called  is added to the stack, when the function returns is remove from the stack.

for example:

```js
fuction a(){
    console.log('A');
}

fuction b(){
    a();
    console.log('B');
}
b();
```
for example, here loop blocks the thread delaying execution of **console.log('End')**. One major challenge with single-threaded models is handling long-running tasks without freezing the entire application.

```js
console.log('Start');   
for(let i=0; i<1e9; i++){} // Blocking loop 
console.log('End');
```

Imagine a system handling multiple user request when suddenly a complex calculation is needed. In a single-threaded model, this calculation would block all other requests until it completes, leading to poor user experience.
To mitigate this, JavaScript environments like Node.js use an event-driven architecture with an event loop and callback queue to handle asynchronous operations efficiently.
Lack of parallelism: Single-threaded models cannot take full advantage of multi-core processors, limiting performance for CPU-intensive tasks.

To overcome these issue, traditional web server like apache use a multi-threaded model where each incoming request gets its own thread. This ensures that a slow request doesn't block others. 
However, this approach can be resource-intensive as each thread consumes memory and CPU time.

## Nodejs approach

Instead of create a new thread for each request, Node.js uses a single-threaded, but uses an event-driven non-blocking IO model. 
This allows it to handle many connections concurrently without getting stuck waiting for slow task.

When a request comes in that requires I/O (like reading from a database or file system), Node.js offloads that operation 
to the system kernel or a thread pool managed by libuv. While waiting for the I/O operation to complete, 
the event loop continues to process other incoming requests. Once the I/O operation is done, 
a callback is placed in the event queue to be executed when the event loop is ready.



```mermaid
graph TD
    %% Definición de estilos para diferenciar conceptos
    classDef rxjs fill:#f0f0f0,stroke:#d63384,stroke-width:2px,color:#d63384,stroke-dasharray: 5 5;
    classDef jsCore fill:#e6f7ff,stroke:#1890ff,stroke-width:2px,color:#0050b3;
    classDef asyncEnv fill:#fffbe6,stroke:#faad14,stroke-width:2px,color:#8c6103;

    subgraph "JS Runtime (Tu Código y el Call Stack)"
        A["1. Tu Código: Crear Observable y .subscribe()"]:::jsCore --> B{"¿Es la fuente Síncrona o Asíncrona?"}:::rxjs
    end

    %% --- Ruta Síncrona ---
    B -- "Síncrona (ej. of, fromArray)" --> C["2a. Observable emite valor (en Call Stack)"]:::rxjs
    C --> D["3a. Valor pasa por Operadores (en Call Stack)"]:::rxjs
    D --> E["4a. Se ejecuta Observer.next(valor) (en Call Stack)"]:::jsCore
    E --> F{"¿Quedan más valores?"}:::rxjs
    F -- Sí --> C
    F -- No --> G["5a. Se ejecuta Observer.complete()"]:::jsCore
    G --> H["Fin del bloque Síncrono"]:::jsCore

    %% --- Ruta Asíncrona ---
    B -- "Asíncrona (ej. timer, fetch, fromEvent)" --> I["2b. Delegar a Web API / Libuv"]:::asyncEnv

    subgraph "ASYNC(out Main Thread)"
        I --> J{"3b. Esperar Evento / I/O / Timer"}:::asyncEnv
    end

    J --> K["4b. Evento ocurre: Callback a la Cola"]:::asyncEnv

    subgraph "Event Loop y Colas"
        K --> L["Cola de Tareas / Microtareas"]:::jsCore
        L --> M{"Event Loop: ¿Call Stack vacío?"}:::jsCore
        M -- No --> L
        M -- Sí --> N["5b. Mover Callback al Call Stack"]:::jsCore
    end

    %% El callback reintroduce el flujo en la lógica de RxJS
    N --> D
    
    %% Leyenda para entender los colores
    subgraph Leyenda
        L1(Lógica Core de JS / Call Stack):::jsCore
        L2(Flujo y Componentes de RxJS):::rxjs
        L3(Web APIs / Libuv / Entorno Async):::asyncEnv
    end

    %% Conexiones finales para cerrar el diagrama visualmente
    H -.-> End((Fin))
    E -.-> End
```

![image-20260127133406592](C:\Users\USUARIO\AppData\Roaming\Typora\typora-user-images\image-20260127133406592.png)

```mermaid
flowchart LR
  JS[JavaScript Call Stack]
  EL[Event Loop]
  ED[Event Demultiplexer<br/>epoll / kqueue]
  OS[OS / Network / FS]
  Q[Task Queue]

  JS --> EL
  EL --> ED
  ED --> OS
  OS --> ED
  ED --> Q
  Q --> EL
  EL --> JS

```

