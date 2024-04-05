import React, { useState } from "react";
import {
    Button,
    Dialog,
    Card,
    CardBody,
    Typography,
    Input,
    DialogFooter,
} from "@material-tailwind/react";

export function ComplaintModal() {
    const [open, setOpen] = useState(false);
    const [isDisabled, setIsDisabled] = useState(true);
    const [boycottedBrand, setBoycottedBrand] = useState("");
    const [alternative, setAlternative] = useState("");
    const [proofUrl, setProofUrl] = useState("");
    const [reason, setReason] = useState("");

    const handleOpen = () => {
        setOpen(!open);
        setIsDisabled(true);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        if (name === "boycottedBrand") {
            setBoycottedBrand(value.trim());
        } else if (name === "proof") {
            setProofUrl(value.trim());
        } else if (name === "reason") {
            setReason(value.trim());
        } else if (name === "alternative") {
            setAlternative(value.trim());
        }

        if (boycottedBrand.trim() !== "" && proofUrl.trim() !== "" && reason.trim() !== "") {
            setIsDisabled(false);
        } else {
            setIsDisabled(true);
        }
    };

    const submitBoycott = (event) => {
        event.preventDefault(); // Prevent default form submission

        fetch('http://localhost:8080/suggestion/addBoycott', {
            method: 'POST',
            body: JSON.stringify({
                name: boycottedBrand,
                alternative: alternative,
                proofURL: proofUrl,
                reason: reason,
                is_accepted: false
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            // Handle response
            if (response.ok) {
                // Handle successful submission
                console.log('Boycott submitted successfully');

                handleOpen();
                
            } else {
                // Handle error
                console.error('Error submitting boycott');
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    };

    return (
        
            <>
                <Button className="mb-1 flex items-center justify-center gap-3 !py-4 shadow-md grow " onClick={handleOpen}>
                    Complaint
                </Button>
                <Dialog
                    size="md"
                    open={open}
                    handler={handleOpen}
                    className="bg-transparent shadow-none"
                >
                    <Card>
                        <CardBody className="flex flex-col gap-4">
                            <Typography variant="h4" color="blue-gray">
                                Boycott
                            </Typography>
                            <Typography
                                className="mb-3 font-normal"
                                variant="paragraph"
                                color="gray"
                            >
                                Add a boycotted Brand
                            </Typography>
                            <div className="flex grid grid-cols-2 gap-4">
                                <Input label="Boycotted Brand*" size="sm" style={{ flex: 1 }} name="boycottedBrand" onChange={handleChange} />
                                <Input label="Alternative" name="alternative" size="sm" style={{ flex: 1 }} onChange={handleChange} />

                            </div>
                            <Input label="Proof URL*" size="sm" style={{ flex: 1 }} name="proof" onChange={handleChange} />
                            <div className="relative w-full min-w-[200px]">
                                <textarea
                                    className="peer h-full min-h-[100px] w-full resize-none rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-green-500 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
                                    placeholder=" " onChange={handleChange} name="reason"></textarea>
                                <label
                                    className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-green-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-green-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-green-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                    Reason*
                                </label>
                            </div>

                            {isDisabled? <div className="w-[32rem]">
                                <Typography
                                    variant="small"
                                    color="gray"
                                    className="mt-2 flex items-center gap-1 font-normal"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="-mt-px h-4 w-4"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    Fields marked with * must not be null.
                                </Typography>
                            </div> : undefined}

                        </CardBody>
                        <DialogFooter className="pt-0">
                            <Button
                                variant="text"
                                color="red"
                                type="button" 
                                onClick={handleOpen}
                                className="mr-1"

                            >
                                <span>Close</span>
                            </Button>
                            <Button variant="gradient"  color="green" disabled={isDisabled} onClick={submitBoycott} >
                                Submit
                            </Button>
                        </DialogFooter>
                    </Card>
                </Dialog>
            </>
   
    );
}
