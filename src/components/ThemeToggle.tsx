import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

const ThemeToggle = () => {
  const { theme, toggleTheme, isMounted } = useTheme();

  if (!isMounted) {
    return (
      <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700" />
    );
  }

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative w-12 h-12 rounded-full flex items-center justify-center
                bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600
                transition-colors duration-200"
      aria-label={`Toggle ${theme === "dark" ? "light" : "dark"} mode`}
    >
      <motion.div
        key="moon"
        initial={{ scale: theme === "dark" ? 1 : 0 }}
        animate={{ scale: theme === "dark" ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className="absolute"
      >
        <Moon className="w-5 h-5 text-gray-700 dark:text-yellow-400" />
      </motion.div>

      <motion.div
        key="sun"
        initial={{ scale: theme === "light" ? 1 : 0 }}
        animate={{ scale: theme === "light" ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className="absolute"
      >
        <Sun className="w-5 h-5 text-yellow-500" />
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;
