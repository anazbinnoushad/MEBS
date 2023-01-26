import { useState } from "react";
import MEBSFrom from "../components/MEBSComponents/MEBSFrom";
import MESBButton from "../components/MEBSComponents/MESBButton";

const fields = [
    {
        fieldClass: " grid gap-4 grid-cols-2",
        fieldItems: [
            { id: "first_name", label: "First Name", type: "text", required: true },
            { id: "last_name", label: "Last Name", type: "text" },
            { id: "age", label: "Age", type: "number", required: true },
            { id: "phone", label: "Phone", type: "number", required: true },
            { id: "email", label: "Email", type: "email", required: true },
            { id: "location", label: "Location", type: "text", required: true }

        ]
    }
]

const AddNewUser = () => {
    const [data, setData] = useState<any>({})

    const handleSubmit = () => {
        console.log(`AddNewUser,  : data`, data)
    }
    return (
        <div className="p-4 flex justify-center bg-contentbg h-full">
            <form onSubmit={(e) => {
                e.preventDefault();
                handleSubmit?.();
            }}
                className=" w-full bg-white rounded-md flex justify-between flex-col">
                <div className=" overflow-y-scroll">
                    <div className=" p-4 px-8 border-b">
                        <a className=" text-xl font-medium">Add User</a>
                    </div>
                    <div className=" p-5">
                        {fields?.map((field) => (
                            <MEBSFrom
                                fields={field?.fieldItems}
                                fieldClass={field?.fieldClass}
                                data={data}
                                onChangeData={(data: any) => setData(data)}
                            />
                        ))}
                    </div>
                </div>
                <div className=" flex justify-end gap-4 items-center border-t p-4 px-8">
                    <MESBButton text="Cancel" variant="secondary" />
                    <MESBButton text="Submit" variant="primary" type="submit" />
                </div>
            </form>
        </div >
    );
}

export default AddNewUser;