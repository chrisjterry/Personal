const initPage = () => {
    let i = 0;
    const badWelcome = "Welcom to Chris Terry's p";
    const timeouts = [];
    timeouts.push(setTimeout(() => typeBadWelcome(badWelcome, i, timeouts), 0));
    timeouts.push(setTimeout(() => i = badWelcome.length - 1, 2950));
    timeouts.push(setTimeout(() => eraseBadWelcome(badWelcome, i, timeouts), 3000));
    timeouts.push(setTimeout(() => i = 6, 4000));
    timeouts.push(setTimeout(() => typeGoodWelcome(i, timeouts), 4500));
    timeouts.push(setTimeout(() => i = 0, 8000));
    timeouts.push(setTimeout(() => typeMaterials(i, timeouts), 8500));
    timeouts.push(setTimeout(() => i = 0, 9000));
    timeouts.push(setTimeout(() => typeResume(i, timeouts), 9500));
    timeouts.push(setTimeout(() => i = 0, 10000));
    timeouts.push(setTimeout(() => typeProfiles(i, timeouts), 10500));
    timeouts.push(setTimeout(() => i = 0, 11000));
    timeouts.push(setTimeout(() => typeGitHub(i, timeouts), 11500));
    timeouts.push(setTimeout(() => i = 0, 12000));
    timeouts.push(setTimeout(() => typeLinkedIn(i, timeouts), 12500));
    timeouts.push(setTimeout(() => i = 0, 13000));
    timeouts.push(setTimeout(() => typeAngelList(i, timeouts), 13500));
    timeouts.push(setTimeout(() => i = 0, 14000));
    timeouts.push(setTimeout(() => typeProjects(i, timeouts), 14500));
    timeouts.push(setTimeout(() => i = 0, 15000));
    timeouts.push(setTimeout(() => typeCryptoList(i, timeouts), 15500));
    timeouts.push(setTimeout(() => i = 0, 16000));
    timeouts.push(setTimeout(() => typeHikeSF(i, timeouts), 16500));
    timeouts.push(setTimeout(() => i = 0, 17000));
    timeouts.push(setTimeout(() => typeTalkie(i, timeouts), 17500));
    timeouts.push(setTimeout(() => i = 0, 18000));
    timeouts.push(setTimeout(() => typePersonal(i, timeouts), 18500));
    // timeouts.push(setTimeout(() => document.getElementById('personal').addEventListener('click', destroyPersonal), 19500));
    document.addEventListener('click', () => skipTimeouts(timeouts));    
}

const typeBadWelcome = (badWelcome, i, timeouts) => {
    if (i < badWelcome.length) {
        document.getElementById('welcome').innerHTML += badWelcome[i];
        i++;
        timeouts.push(setTimeout(() => typeBadWelcome(badWelcome, i, timeouts), 80));
    }
}

const eraseBadWelcome = (badWelcome, i, timeouts) => {
    if (i > 5) {
        document.getElementById('welcome').innerHTML = badWelcome.slice(0, i);
        i--;
        timeouts.push(setTimeout(() => eraseBadWelcome(badWelcome, i, timeouts), 60));
    }
}

const typeGoodWelcome = (i, timeouts) => {
    const goodWelcome = "Welcome to Chris Terry's personal website.";
    if (i < goodWelcome.length) {
        document.getElementById('welcome').innerHTML += goodWelcome[i];
        i++;
        timeouts.push(setTimeout(() => typeGoodWelcome(i), 80));
    }
}

const typeResume = (i, timeouts) => {
    const resume = "Resume";
    if (i < resume.length) {
        document.getElementById('resume').innerHTML += resume[i];
        i++;
        timeouts.push(setTimeout(() => typeResume(i), 80));
    }
}

const typeGitHub = (i, timeouts) => {
    const github = "GitHub";
    if (i < github.length) {
        document.getElementById('github').innerHTML += github[i];
        i++;
        timeouts.push(setTimeout(() => typeGitHub(i), 80));
    }
}

const typeLinkedIn = (i, timeouts) => {
    const linkedin = "LinkedIn";
    if (i < linkedin.length) {
        document.getElementById('linkedin').innerHTML += linkedin[i];
        i++;
        timeouts.push(setTimeout(() => typeLinkedIn(i), 80));
    }
}

const typeAngelList = (i, timeouts) => {
    const angellist = "AngelList";
    if (i < angellist.length) {
        document.getElementById('angellist').innerHTML += angellist[i];
        i++;
        timeouts.push(setTimeout(() => typeAngelList(i), 80));
    }
}

const typeCryptoList = (i, timeouts) => {
    const cryptolist = "CryptoList";
    if (i < cryptolist.length) {
        document.getElementById('cryptolist').innerHTML += cryptolist[i];
        i++;
        timeouts.push(setTimeout(() => typeCryptoList(i), 80));
    }
}

const typeHikeSF = (i, timeouts) => {
    const hikesf = "HikeSF";
    if (i < hikesf.length) {
        document.getElementById('hikesf').innerHTML += hikesf[i];
        i++;
        timeouts.push(setTimeout(() => typeHikeSF(i), 80));
    }
}

const typeTalkie = (i, timeouts) => {
    const talkie = "Talkie";
    if (i < talkie.length) {
        document.getElementById('talkie').innerHTML += talkie[i];
        i++;
        timeouts.push(setTimeout(() => typeTalkie(i), 80));
    }
}

const typePersonal = (i, timeouts) => {
    const personal = "Personal Website";
    if (i < personal.length) {
        document.getElementById('personal').innerHTML += personal[i];
        i++;
        timeouts.push(setTimeout(() => typePersonal(i), 80));
    }
}

const destroyPersonal = (e) => {
    e.preventDefault();
    const personalEl = document.getElementById('personal');
    const personalVal = personalEl.innerHTML;
    personalEl.innerHTML = personalVal.slice(0, personalVal.length - 1);
}

const typeMaterials = (i, timeouts) => {
    const materials = "Materials:";
    if (i < materials.length) {
        document.getElementById('materials').innerHTML += materials[i];
        i++;
        setTimeout(() => typeMaterials(i), 80);
    }
}

const typeProfiles = (i, timeouts) => {
    const profiles = "Profiles:";
    if (i < profiles.length) {
        document.getElementById('profiles').innerHTML += profiles[i];
        i++;
        setTimeout(() => typeProfiles(i), 80);
    }
}

const typeProjects = (i, timeouts) => {
    const projects = "Projects:";
    if (i < projects.length) {
        document.getElementById('projects').innerHTML += projects[i];
        i++;
        setTimeout(() => typeProjects(i), 80);
    }
}

const skipTimeouts = timeouts => {
    for (let i = 0; i < timeouts.length; i++) {
        clearTimeout(timeouts[i]);       
    }
    
    document.getElementById('welcome').innerHTML = "Welcome to Chris Terry's personal website.";
    document.getElementById('materials').innerHTML = "Materials:";
    document.getElementById('resume').innerHTML = "Resume";
    document.getElementById('profiles').innerHTML = "Profiles:";
    document.getElementById('github').innerHTML = "GitHub";
    document.getElementById('linkedin').innerHTML = "LinkedIn";
    document.getElementById('angellist').innerHTML = "AngelList";
    document.getElementById('projects').innerHTML = "Projects:";
    document.getElementById('cryptolist').innerHTML = "CryptoList";
    document.getElementById('hikesf').innerHTML = "HikeSF";   
    document.getElementById('talkie').innerHTML = "Talkie";
    document.getElementById('personal').innerHTML = "Personal Website";
}