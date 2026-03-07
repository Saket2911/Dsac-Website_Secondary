import mongoose, { Schema } from "mongoose";
const questSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  xpReward: {
    type: Number,
    required: true,
    default: 15
  },
  category: {
    type: String,
    required: true,
    enum: ["Frontend", "Backend", "DSA", "DevOps", "General"]
  },
  icon: {
    type: String,
    default: "🎯"
  },
  modules: [{
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      default: ""
    },
    completed: {
      type: Boolean,
      default: false
    }
  }],
  completedUsers: [{
    type: Schema.Types.ObjectId,
    ref: "User"
  }],
  prerequisite: {
    type: Schema.Types.ObjectId,
    ref: "Quest",
    default: null
  }
}, {
  timestamps: true
});
const Quest = mongoose.model("Quest", questSchema);
export default Quest;