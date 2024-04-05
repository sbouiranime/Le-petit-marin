import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  IconButton,
  Typography,
  MenuItem,
} from "@material-tailwind/react";
import { BoycottModal } from "./BoycottModal";
import {AlternativeModal} from "./AlternativeModal";
import {ComplaintModal} from "./ComplaintModal";

export function SuggestionModal() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen((cur) => !cur);

  return (
    <>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium"
      >

        <Button variant="text" className="flex items-center gap-2" onClick={handleOpen}>
          Add a Suggestion{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </Button>
      </Typography>

      <Dialog size="xs" open={open} handler={handleOpen}>
        <DialogHeader className="justify-between">
          <div>
            <Typography variant="h5" color="blue-gray">
              Make a Suggestion
            </Typography>
            <Typography color="gray" variant="paragraph">
              Choose suggestion type
            </Typography>
          </div>
          <IconButton
            color="blue-gray"
            size="sm"
            variant="text"
            onClick={handleOpen}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </DialogHeader>
        <DialogBody className="overflow !px-5">
          <div className="mb-6">
            <Typography
              variant="paragraph"
              color="blue-gray"
              className="py-3 font-semibold uppercase opacity-70"
            >
              Something Missing?
            </Typography>
            <ul className="mt-3 -ml-2 flex flex-col gap-1">
              <BoycottModal />

              <AlternativeModal />

              <ComplaintModal />

            </ul>
          </div>

        </DialogBody>

      </Dialog>
    </>
  );
}