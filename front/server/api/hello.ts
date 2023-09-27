import * as path from "path";

const a = defineEventHandler(async (event) => {
    const body = await readBody<{
        hello: number
    }>(event)

    console.log(body.hello);

    return { hello: 'world' }
})

export default a;

type FunctionWithOutput<G, T> = (data: G) => T;

function ensureOutputType<IN, OUT>(inputFunc: (data: IN) => OUT) {
    const defineHandler = defineEventHandler(async (event) => {
        const body = await readBody<IN>(event)
        return inputFunc(body);
    })
    return inputFunc;
}