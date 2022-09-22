import React from "react";
import { useStorageListener } from "./useStorageListener";
import { AnimatePresence, motion } from "framer-motion";
import "./ChangeAlert.scss"

function ChangeAlert({ syncronize }) {

    const { show } = useStorageListener(syncronize)

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    exit={{ opacity: 0, y: 50 }}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }} 
                    key={1}
                    className="ChangeAlert"
                >
                    <p>La información se ha actualizado desde una ventana externa!</p>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export { ChangeAlert }