document.addEventListener('DOMContentLoaded', () => {
    // Check if cvData is available (loaded from data.js)
    if (typeof cvData !== 'undefined') {
        renderCV(cvData);
    } else {
        console.error('cvData is not defined. Make sure data.js is loaded correctly.');
        document.body.innerHTML = '<h1 style="text-align:center; margin-top: 50px; color: red;">Error: data.js not loaded.</h1>';
    }
});

function renderCV(data) {
    // Profile
    document.getElementById('profile-name').textContent = data.profile.name;
    document.getElementById('profile-title').textContent = data.profile.title;
    document.getElementById('profile-dob').textContent = data.profile.dob;
    document.getElementById('profile-email').textContent = data.profile.email;
    document.getElementById('profile-email').href = `mailto:${data.profile.email}`;
    document.getElementById('profile-location').textContent = data.profile.location;
    document.getElementById('profile-linkedin').textContent = data.profile.linkedin;
    document.getElementById('profile-linkedin').href = data.profile.linkedin_url;

    // Phone
    const phoneContainer = document.getElementById('phone-container');
    const phoneEl = document.getElementById('profile-phone');
    if (phoneContainer && phoneEl) {
        if (data.profile.phone && data.profile.phone.trim() !== "") {
            phoneEl.textContent = data.profile.phone;
            phoneContainer.style.display = 'block';
        } else {
            phoneContainer.style.display = 'none';
        }
    }

    // Status Badge
    const statusEl = document.getElementById('profile-status');
    if (statusEl) {
        if (data.profile.status) {
            statusEl.textContent = data.profile.status;
            statusEl.style.display = 'inline-block';
        } else {
            statusEl.style.display = 'none';
        }
    }

    // Summary
    document.getElementById('summary-content').innerHTML = data.summary;

    // Skills
    const skillsGrid = document.getElementById('skills-grid');
    if (skillsGrid) {
        skillsGrid.innerHTML = '';
        data.skills.forEach(skill => {
            const div = document.createElement('div');
            div.className = 'skill-category';
            div.innerHTML = `<span class="skill-name">${skill.category}</span><span class="skill-desc">${skill.items}</span>`;
            skillsGrid.appendChild(div);
        });
    }

    // Experience
    const experienceSection = document.getElementById('experience-section');
    if (experienceSection) {
        experienceSection.innerHTML = '';
        data.experience.forEach(job => {
            const jobDiv = document.createElement('div');
            jobDiv.className = 'job';

            let detailsHtml = '<ul>';
            job.details.forEach(item => {
                detailsHtml += `<li>${item}</li>`;
            });
            detailsHtml += '</ul>';

            jobDiv.innerHTML = `
                <div class="job-header">
                    <span class="job-title">${job.title}</span>
                    <span class="date">${job.date}</span>
                </div>
                <div class="company">${job.company}</div>
                ${detailsHtml}
            `;
            experienceSection.appendChild(jobDiv);
        });
    }

    // Projects
    const projectsSection = document.getElementById('projects-section');
    if (projectsSection) {
        projectsSection.innerHTML = '';
        data.projects.forEach(project => {
            const div = document.createElement('div');
            div.className = 'project-item';

            let detailsHtml = '<ul>';
            if (project.details && Array.isArray(project.details)) {
                project.details.forEach(item => {
                    detailsHtml += `<li>${item}</li>`;
                });
            } else if (project.description) {
                detailsHtml += `<li>${project.description}</li>`;
            }
            detailsHtml += '</ul>';

            const techHtml = project.tech ? `<div class="project-tech"><strong>Stack:</strong> ${project.tech}</div>` : '';

            div.innerHTML = `
                <div class="project-title">${project.title}</div>
                ${techHtml}
                ${detailsHtml}
            `;
            projectsSection.appendChild(div);
        });
    }

    // Certifications
    const certGrid = document.getElementById('cert-grid');
    if (certGrid) {
        certGrid.innerHTML = '';
        data.certifications.forEach(cert => {
            const div = document.createElement('div');
            div.className = 'cert-item';
            div.innerHTML = `• <strong>${cert}</strong>`;
            certGrid.appendChild(div);
        });
    }

    // Education
    const eduSection = document.getElementById('education-section');
    if (eduSection) {
        eduSection.innerHTML = `
            <div class="job-header">
                <span class="job-title">${data.education.degree}</span>
                <span class="date">${data.education.year}</span>
            </div>
            <div class="company">${data.education.school}</div>
        `;
    }
}
