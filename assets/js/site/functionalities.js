function clearInputs(inputs) {
    inputs.nameInput.value = '';
    inputs.addressInput.value = '';
    inputs.emailInput.value = '';
    inputs.phoneInput.value = '';
    inputs.websiteInput.value = '';
    inputs.summaryInput.value = '';
    inputs.languagesInput.value = '';
    inputs.jobsInput.value = '';
    inputs.educationInput.value = '';
    inputs.skillsInput.value = '';
    inputs.certificationsInput.value = '';
    inputs.nameInput.classList.remove('border-success');
    inputs.addressInput.classList.remove('border-success');
    inputs.emailInput.classList.remove('border-success');
    inputs.phoneInput.classList.remove('border-success');
    inputs.websiteInput.classList.remove('border-success');
    inputs.summaryInput.classList.remove('border-success');
    inputs.languagesInput.classList.remove('border-success');
    inputs.jobsInput.classList.remove('border-success');
    inputs.educationInput.classList.remove('border-success');
    inputs.skillsInput.classList.remove('border-success');
    inputs.certificationsInput.classList.remove('border-success');
}

function generateList(data, element) {
    for (const content of data) {
        const listItem = document.createElement('li');
        listItem.innerText = content;
        if (element.id == 'experience-content')
            listItem.classList.add('m-2', 'mt-0', 'mb-0');
        element.appendChild(listItem);
    }
}

function generateCv(data) {
    // `something` + Content makes reference to the HTML elements that show the data obtained from the form
    // `something` + Data makes reference to the data obtained from the form
    const nameContent = document.getElementById('name-content');
    const addressContent = document.getElementById('address-content');
    const emailContent = document.getElementById('email-content');
    const phoneContent = document.getElementById('phone-content');
    const websiteContent = document.getElementById('website-content');
    const summaryContent = document.getElementById('summary-content');
    const languagesContent = document.getElementById('languages-content');
    const jobsContent = document.getElementById('experience-content');
    const educationContent = document.getElementById('education-content');
    const skillsContent = document.getElementById('skills-content');
    const certificationsContent = document.getElementById('certifications-content');

    languagesContent.innerText = '';
    jobsContent.innerText = '';
    educationContent.innerText = '';
    skillsContent.innerText = '';
    certificationsContent.innerText = '';

    nameContent.innerText = data.name;
    addressContent.innerText = data.address;
    emailContent.innerText = data.email;
    phoneContent.innerText = data.phone;
    websiteContent.innerText = data.website;
    summaryContent.innerText = data.summary;

    const languagesData = data.languages.split(',');
    const jobsData = data.jobs.split(',');
    const educationData = data.education.split(',');
    const skillsData = data.skills.split(',');
    const certificationsData = data.certifications.split(',');

    generateList(languagesData, languagesContent);
    generateList(jobsData, jobsContent);
    generateList(educationData, educationContent);
    generateList(certificationsData, certificationsContent);

    const skillsAmount = skillsData.length;
    const skillsRowsAmount = Math.round(skillsAmount / 2);
    const rows = [];

    for (let i = 0; i < skillsRowsAmount; i++) {
        const div = document.createElement('div');
        div.classList.add('d-flex');
        skillsContent.appendChild(div);
        rows.push(div);
    }

    let counter = 0;

    for (let i = 0; i < skillsAmount; i += 2) {
        if (skillsAmount % 2 == 1 && i + 1 == skillsAmount) {
            const li = document.createElement('li');
            li.innerText = skillsData[i];
            li.classList.add('m-2', 'mt-0', 'mb-0', 'w-50');
            rows[counter].appendChild(li);
            break;
        }

        const firstLi = document.createElement('li');
        const secondLi = document.createElement('li');
        firstLi.innerText = skillsData[i];
        secondLi.innerText = skillsData[i + 1];
        firstLi.classList.add('m-2', 'mt-0', 'mb-0', 'w-50');
        secondLi.classList.add('m-2', 'mt-0', 'mb-0', 'w-50');
        rows[counter].appendChild(firstLi);
        rows[counter].appendChild(secondLi);
        counter++;
    }

    for (const row of rows) {
        skillsContent.appendChild(row);
    }

    document.getElementById('cv').classList.remove('d-none');
}

function validateData() {
    const nameInput = document.getElementById('name');
    const addressInput = document.getElementById('address');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const websiteInput = document.getElementById('website');
    const summaryInput = document.getElementById('summary');
    const languagesInput = document.getElementById('languages');
    const jobsInput = document.getElementById('jobs');
    const educationInput = document.getElementById('education');
    const skillsInput = document.getElementById('skills');
    const certificationsInput = document.getElementById('certifications');

    let isValidated = true;

    if (!nameInput.value || nameInput.value == null || nameInput.value == '') {
        nameInput.classList.remove('border-success');
        nameInput.classList.add('border-danger');
        isValidated = false;
    } else {
        nameInput.classList.remove('border-danger');
        nameInput.classList.add('border-success');
    }

    if (!addressInput.value || addressInput.value == null || addressInput.value == '') {
        addressInput.classList.remove('border-success');
        addressInput.classList.add('border-danger');
        isValidated = false;
    } else {
        addressInput.classList.remove('border-danger');
        addressInput.classList.add('border-success');
    }

    if (!emailInput.value || emailInput.value == null || emailInput.value == '') {
        emailInput.classList.remove('border-success');
        emailInput.classList.add('border-danger');
        isValidated = false;
    } else {
        emailInput.classList.remove('border-danger');
        emailInput.classList.add('border-success');
    }

    if (!phoneInput.value || phoneInput.value == null || phoneInput.value == '') {
        phoneInput.classList.remove('border-success');
        phoneInput.classList.add('border-danger');
        isValidated = false;
    } else {
        phoneInput.classList.remove('border-danger');
        phoneInput.classList.add('border-success');
    }

    if (!websiteInput.value || websiteInput.value == null || websiteInput.value == '') {
        websiteInput.classList.remove('border-success');
        websiteInput.classList.add('border-danger');
        isValidated = false;
    } else {
        websiteInput.classList.remove('border-danger');
        websiteInput.classList.add('border-success');
    }

    if (!summaryInput.value || summaryInput.value == null || summaryInput.value == '') {
        summaryInput.classList.remove('border-success');
        summaryInput.classList.add('border-danger');
        isValidated = false;
    } else {
        summaryInput.classList.remove('border-danger');
        summaryInput.classList.add('border-success');
    }

    if (!languagesInput.value || languagesInput.value == null || languagesInput.value == '') {
        languagesInput.classList.remove('border-success');
        languagesInput.classList.add('border-danger');
        isValidated = false;
    } else {
        languagesInput.classList.remove('border-danger');
        languagesInput.classList.add('border-success');
    }

    if (!jobsInput.value || jobsInput.value == null || jobsInput.value == '') {
        jobsInput.classList.remove('border-success');
        jobsInput.classList.add('border-danger');
        isValidated = false;
    } else {
        jobsInput.classList.remove('border-danger');
        jobsInput.classList.add('border-success');
    }

    if (!educationInput.value || educationInput.value == null || educationInput.value == '') {
        educationInput.classList.remove('border-success');
        educationInput.classList.add('border-danger');
        isValidated = false;
    } else {
        educationInput.classList.remove('border-danger');
        educationInput.classList.add('border-success');
    }

    if (!skillsInput.value || skillsInput.value == null || skillsInput.value == '') {
        skillsInput.classList.remove('border-success');
        skillsInput.classList.add('border-danger');
        isValidated = false;
    } else {
        skillsInput.classList.remove('border-danger');
        skillsInput.classList.add('border-success');
    }

    if (!certificationsInput.value || certificationsInput.value == null || certificationsInput.value == '') {
        certificationsInput.classList.remove('border-success');
        certificationsInput.classList.add('border-danger');
        isValidated = false;
    } else {
        certificationsInput.classList.remove('border-danger');
        certificationsInput.classList.add('border-success');
    }

    if (!isValidated) {
        alert('Debe rellenar todos los campos');
        return;
    }

    const cvData = {
        name: nameInput.value,
        address: addressInput.value,
        email: emailInput.value,
        phone: phoneInput.value,
        website: websiteInput.value,
        summary: summaryInput.value,
        languages: languagesInput.value,
        jobs: jobsInput.value,
        education: educationInput.value,
        skills: skillsInput.value,
        certifications: certificationsInput.value
    };

    const inputs = {
        nameInput,
        addressInput,
        emailInput,
        phoneInput,
        websiteInput,
        summaryInput,
        languagesInput,
        jobsInput,
        educationInput,
        skillsInput,
        certificationsInput
    }

    clearInputs(inputs);
    generateCv(cvData);
}