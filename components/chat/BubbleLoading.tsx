import { motion } from "framer-motion";

export function BubbleLoading() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="w-fit bg-pink-100 p-3 rounded-2xl mt-4"
    >
      <div className="flex gap-1">
        <motion.span
          className="w-2 h-2 bg-pink-400 rounded-full"
          animate={{
            y: [0, -6, 0],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            delay: 0,
          }}
        />
        <motion.span
          className="w-2 h-2 bg-pink-400 rounded-full"
          animate={{
            y: [0, -6, 0],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            delay: 0.2,
          }}
        />
        <motion.span
          className="w-2 h-2 bg-pink-400 rounded-full"
          animate={{
            y: [0, -6, 0],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            delay: 0.4,
          }}
        />
      </div>
    </motion.div>
  );
}
