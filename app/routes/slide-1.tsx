import type { ActionFunction } from "@remix-run/node"

// 📜 Basic web form

export const action: ActionFunction = async ({request}) => {
    const formData = await request.formData()

    // 🍀 get form data
    const email = formData.get("email")
    const age = formData.get("age")
    const name = formData.get("name")

    console.log("Server receives data: ", {
        name,
        age,
        email,
    })

    return {ok: true}

}

export default function Page() {
    return (
        <main>
            <form method="post">
                <fieldset className="flex flex-col gap-2"> 
                    <div>
                        <label htmlFor="name">Name</label>
                        <input className="border-2 border-solid border-gray-500 invalid:border-red-300 rounded-sm" type="text" id="name" name="name" />
                    </div>

                    <div>
                        <label htmlFor="age">Age</label>
                        <input className="border-2 border-solid border-gray-500 invalid:border-red-300 rounded-sm" type="number" id="age" name="age" />
                    </div>

                    <div>
                        <label htmlFor="email">Email</label>
                        <input className="border-2 border-solid border-gray-500 invalid:border-red-300 rounded-sm" type="email" id="email" name="email" required/>
                    </div>

                    <button className="p-2 bg-green-200 w-[400px]" type="submit">Submit</button>
                </fieldset>
            </form>
        </main>
    )
}