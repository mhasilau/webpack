import { PATH } from "./locations"

export const links = () => {
    const git = document.getElementById('git')
    const about = document.getElementById('about')
    const projects = document.getElementById('projects')
    const skills = document.getElementById('skills')
    const experience = document.getElementById('experience')

    about.onclick = () => window.location.href = PATH.about;
    git.onclick = () => window.location.href = PATH.git;
    projects.onclick = () => window.location.href = PATH.projects;
    skills.onclick = () => window.location.href = PATH.skills;
    experience.onclick = () => window.location.href = PATH.experience;
    console.log('links');
}