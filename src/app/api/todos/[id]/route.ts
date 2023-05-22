import { NextResponse } from "next/server";

type Props = {
    params : {
        id : string
    }
}

const DATA_SOURCE_URL = "https://jsonplaceholder.typicode.com/todos";

export async function GET(request: Request, {
    params : {id}
}: Props) {
    
    const res = await fetch(`${DATA_SOURCE_URL}/${id}`);
    const todo: Todo = await res.json();
    if (!todo.id) return NextResponse.json({ "message": "id not found" })
    return NextResponse.json(todo);
}
