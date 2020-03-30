const initPage = () => {
    let i = 0;
    const badWelcome = "Welcom to Chris Terry's p";
    typeBadWelcome(badWelcome, i);
    setTimeout(() => i = badWelcome.length - 1, 2950);
    setTimeout(() => eraseBadWelcome(badWelcome, i), 3000);
    setTimeout(() => i = 6, 4000);
    setTimeout(() => typeGoodWelcome(i), 4500);
    setTimeout(() => i = 0, 8000);
    setTimeout(() => typeMaterials(i), 8500);
    setTimeout(() => i = 0, 9000);
    setTimeout(() => typeResume(i), 9500);
    setTimeout(() => i = 0, 10000);
    setTimeout(() => typeProfiles(i), 10500);
    setTimeout(() => i = 0, 11000);
    setTimeout(() => typeGitHub(i), 11500);
    setTimeout(() => i = 0, 12000);
    setTimeout(() => typeLinkedIn(i), 12500);
    setTimeout(() => i = 0, 13000);
    setTimeout(() => typeAngelList(i), 13500);
    setTimeout(() => i = 0, 14000);
    setTimeout(() => typeProjects(i), 14500);
    setTimeout(() => i = 0, 15000);
    setTimeout(() => typeCryptoList(i), 15500);
    setTimeout(() => i = 0, 16000);
    setTimeout(() => typeHikeSF(i), 16500);
    setTimeout(() => i = 0, 17000);
    setTimeout(() => typeTalkie(i), 17500);
    setTimeout(() => i = 0, 18000);
    setTimeout(() => typePersonal(i), 18500);
    setTimeout(() => document.getElementById('personal').addEventListener('click', destroyPersonal), 19500);
}

const typeBadWelcome = (badWelcome, i) => {
    if (i < badWelcome.length) {
        document.getElementById('welcome').innerHTML += badWelcome[i];
        i++;
        setTimeout(() => typeBadWelcome(badWelcome, i), 80);
    }
}

const eraseBadWelcome = (badWelcome, i) => {
    if (i > 5) {
        document.getElementById('welcome').innerHTML = badWelcome.slice(0, i);
        i--;
        setTimeout(() => eraseBadWelcome(badWelcome, i), 60);
    }
}

const typeGoodWelcome = i => {
    const goodWelcome = "Welcome to Chris Terry's personal website.";
    if (i < goodWelcome.length) {
        document.getElementById('welcome').innerHTML += goodWelcome[i];
        i++;
        setTimeout(() => typeGoodWelcome(i), 80);
    }
}

const typeResume = i => {
    const resume = "Resume";
    if (i < resume.length) {
        document.getElementById('resume').innerHTML += resume[i];
        i++;
        setTimeout(() => typeResume(i), 80);
    }
}

const typeGitHub = i => {
    const github = "GitHub";
    if (i < github.length) {
        document.getElementById('github').innerHTML += github[i];
        i++;
        setTimeout(() => typeGitHub(i), 80);
    }
}

const typeLinkedIn = i => {
    const linkedin = "LinkedIn";
    if (i < linkedin.length) {
        document.getElementById('linkedin').innerHTML += linkedin[i];
        i++;
        setTimeout(() => typeLinkedIn(i), 80);
    }
}

const typeAngelList = i => {
    const angellist = "AngelList";
    if (i < angellist.length) {
        document.getElementById('angellist').innerHTML += angellist[i];
        i++;
        setTimeout(() => typeAngelList(i), 80);
    }
}

const typeCryptoList = i => {
    const cryptolist = "CryptoList";
    if (i < cryptolist.length) {
        document.getElementById('cryptolist').innerHTML += cryptolist[i];
        i++;
        setTimeout(() => typeCryptoList(i), 80);
    }
}

const typeHikeSF = i => {
    const hikesf = "HikeSF";
    if (i < hikesf.length) {
        document.getElementById('hikesf').innerHTML += hikesf[i];
        i++;
        setTimeout(() => typeHikeSF(i), 80);
    }
}

const typeTalkie = i => {
    const talkie = "Talkie";
    if (i < talkie.length) {
        document.getElementById('talkie').innerHTML += talkie[i];
        i++;
        setTimeout(() => typeTalkie(i), 80);
    }
}

const typePersonal = i => {
    const personal = "Personal Website";
    if (i < personal.length) {
        document.getElementById('personal').innerHTML += personal[i];
        i++;
        setTimeout(() => typePersonal(i), 80);
    }
}

const destroyPersonal = (e) => {
    e.preventDefault();
    const personalEl = document.getElementById('personal');
    const personalVal = personalEl.innerHTML;
    personalEl.innerHTML = personalVal.slice(0, personalVal.length - 1);
}

const typeMaterials = i => {
    const materials = "Materials:";
    if (i < materials.length) {
        document.getElementById('materials').innerHTML += materials[i];
        i++;
        setTimeout(() => typeMaterials(i), 80);
    }
}

const typeProfiles = i => {
    const profiles = "Profiles:";
    if (i < profiles.length) {
        document.getElementById('profiles').innerHTML += profiles[i];
        i++;
        setTimeout(() => typeProfiles(i), 80);
    }
}

const typeProjects = i => {
    const projects = "Projects:";
    if (i < projects.length) {
        document.getElementById('projects').innerHTML += projects[i];
        i++;
        setTimeout(() => typeProjects(i), 80);
    }
}
