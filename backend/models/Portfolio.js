const mongoose = require('mongoose');

const projectCategorySchema = new mongoose.Schema({
    name: { type: String, required: true },
    filterTag: { type: String, default: "" }
});

const skillSchema = new mongoose.Schema({
    category: { type: String, required: true },
    items: [{ type: String }]
});

const experienceSchema = new mongoose.Schema({
    company: { type: String, required: true },
    role: { type: String, required: true },
    period: { type: String, required: true },
    description: [{ type: String }]
});

const projectSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    title: { type: String },
    description: { type: String },
    longDescription: { type: String },
    tags: [{ type: String }],
    imageUrls: [{ type: String }],
    videoUrl: { type: String },
    links: {
        github: { type: String },
        demo: { type: String }
    },
    role: { type: String },
    timeline: { type: String }
});

const portfolioSchema = new mongoose.Schema({
    name: { type: String, required: true },
    title: { type: String, required: true },
    about: { type: String, required: true },
    aboutHeadline: { type: String, required: true },
    profileImage: { type: String, required: true },
    resumeUrl: { type: String, required: true },
    yearsExperience: { type: String, required: true },
    yearsExperienceLabel: { type: String },
    heroHeadline: { type: String, required: true },
    availabilityStatus: { type: String, required: true },
    skills: [skillSchema],
    experience: [experienceSchema],
    projects: [projectSchema],
    projectCategories: [projectCategorySchema],
    email: { type: String, required: true },
    phone: { type: String, required: true },
    socials: {
        github: { type: String },
        linkedin: { type: String },
        behance: { type: String },
        dribbble: { type: String }
    }
});

module.exports = mongoose.model('Portfolio', portfolioSchema);
