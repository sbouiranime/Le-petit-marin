import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
 
export default function ProofModal({product}) {
  const [open, setOpen] = React.useState(false);
 
  const handleOpen = () => setOpen(!open);
 
  return (
    <>
      <Button onClick={handleOpen} variant="gradient">
        Proof
      </Button>
      
      <Dialog
        open={open}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader>{product.name}</DialogHeader>

        <DialogBody className="overflow-x-auto">
          {product.proof}
        </DialogBody>

        <DialogFooter>
                  <Button
                    variant="text"
                    color="red"
                    onClick={handleOpen}
                    className="mr-1"
                  >
                    <span>Close</span>
                  </Button>

                  <Button variant="gradient" color="green" >
                    <a href={product.srcURL} target="_blank"> 
                        <span>View Source</span></a>
                  </Button>
        </DialogFooter>

      </Dialog>
    </>
  );
}