import mongoose from 'mongoose';

const employeeSchema = new mongoose.Schema({

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },

  employeeId: {
    type: String,
    required: true,
    unique: true
  },

  department: {
    type: String,
    required: function () {
      return this.role === "staff";
    }
  },

  role: {
    type: String,
    enum: ["staff","admin"],
    required: true
  }

});

export default mongoose.model("Employee", employeeSchema);