import type { ActionFunction } from "@remix-run/node"

// 📜 Basic web form

export const action: ActionFunction = async ({request}) => {
    const formData = await request.formData()

    // 🍀 get form data
    const email = formData.get("email")
    const name = formData.get("name")

    console.log("Server receives data: ", {
        email,
        name
    })

    return {ok: true}

}

export default function Page() {
    return (
        <main>
            <form className="flex gap-2" method="post">
                <label htmlFor="name">Name</label>
                <input className="border-2 border-solid border-gray-500 invalid:border-red-300 rounded-sm" type="text" id="name" name="name" />

                <label htmlFor="email">Email</label>
                <input className="border-2 border-solid border-gray-500 invalid:border-red-300 rounded-sm" type="email" id="email" name="email" required/>

                <button className="p-2 bg-green-200" type="submit">Submit</button>
            </form>
        </main>
    )
}