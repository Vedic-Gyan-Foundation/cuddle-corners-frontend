import { motion } from "framer-motion";

function TeamMemberCard({ name, role, image }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex items-center rounded-xl bg-white p-4 shadow-md transition-shadow hover:shadow-lg"
    >
      <img
        src={image}
        alt={name}
        className="h-16 w-16 rounded-full border-2 border-pink-300 object-cover"
      />
      <div className="ml-4">
        <h4 className="font-bold text-gray-800">{name}</h4>
        <p className="text-sm text-gray-600">{role}</p>
      </div>
    </motion.div>
  );
}

export default TeamMemberCard;
