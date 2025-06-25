import React from "react";

function TaskList() {
    return (
        <div
            id="tasklist"
            className="h-[50%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-1 mt-16"
        >
            <div
                className="h-full w-[300px]  rounded-xl felx-shrink-0 flex-shrink-0 bg-red-400 p-5 "
            >
                <div className="flex justify-between items-center">
                    <h3 className="bg-red-600 px-3 py-1 rounded text-sm">High</h3>
                    <h4 className="text-sm">20-May-2025</h4>
                </div>
                <div className="mt-5 text-2xl font-semibold">Make a outube video.</div>
                <p className="text-sm mt-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
                    quidem officiis quaerat harum cupiditate distinctio.
                </p>
            </div>
            <div
                className="h-full w-[300px]  rounded-xl felx-shrink-0 flex-shrink-0 bg-green-400 p-5 "
            >
                <div className="flex justify-between items-center">
                    <h3 className="bg-red-600 px-3 py-1 rounded text-sm">High</h3>
                    <h4 className="text-sm">20-May-2025</h4>
                </div>
                <div className="mt-5 text-2xl font-semibold">Make a outube video.</div>
                <p className="text-sm mt-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
                    quidem officiis quaerat harum cupiditate distinctio.
                </p>
            </div>
            <div
                className="h-full w-[300px]  rounded-xl felx-shrink-0 flex-shrink-0 bg-blue-400 p-5 "
            >
                <div className="flex justify-between items-center">
                    <h3 className="bg-red-600 px-3 py-1 rounded text-sm">High</h3>
                    <h4 className="text-sm">20-May-2025</h4>
                </div>
                <div className="mt-5 text-2xl font-semibold">Make a outube video.</div>
                <p className="text-sm mt-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
                    quidem officiis quaerat harum cupiditate distinctio.
                </p>
            </div>
            <div
                className="h-full w-[300px]  rounded-xl felx-shrink-0 flex-shrink-0 bg-yellow-400 p-5 "
            >
                <div className="flex justify-between items-center">
                    <h3 className="bg-red-600 px-3 py-1 rounded text-sm">High</h3>
                    <h4 className="text-sm">20-May-2025</h4>
                </div>
                <div className="mt-5 text-2xl font-semibold">Make a outube video.</div>
                <p className="text-sm mt-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
                    quidem officiis quaerat harum cupiditate distinctio.
                </p>
            </div>
            
        </div>
    );
}

export default TaskList;
