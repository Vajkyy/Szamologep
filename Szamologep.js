export function initSzamologep() {
  const kifejezesElem = document.querySelector(".kifejezes");
  const eredmenyElem = document.querySelector(".eredmeny");
  const szamokTarolo = document.querySelector(".szamok");
  const muveletekGombok = document.querySelectorAll(".muvjelek button");
  let muvjel = "";

  for (let i = 0; i <= 9; i++) {
    let gomb = document.createElement("button");
    gomb.textContent = i;
    gomb.addEventListener("click", () => {
      kifejezesElem.textContent += i;
    });
    szamokTarolo.appendChild(gomb);
  }

  muveletekGombok.forEach((gomb) => {
    gomb.addEventListener("click", () => {
      if (gomb.id === "torles") {
        kifejezesElem.textContent = "";
        eredmenyElem.textContent = "";
        muvjel = "";
      } else if (gomb.id === "egyenlo") {
        if (muvjel) {
          const tomb = kifejezesElem.textContent.split(muvjel);
          if (tomb.length === 2 && tomb[0] !== "" && tomb[1] !== "") {
            const szam1 = parseFloat(tomb[0]);
            const szam2 = parseFloat(tomb[1]);
            const eredmeny = szamol(szam1, szam2, muvjel);
            kifejezesElem.textContent += "=" + eredmeny;
            eredmenyElem.textContent = "";
          }
        }
      } else {
        if (kifejezesElem.textContent !== "") {
          muvjel = gomb.textContent;
          kifejezesElem.textContent += muvjel;
        }
      }
    });
  });
}

function szamol(szam1, szam2, muvjel) {
  switch (muvjel) {
    case "+":
      return szam1 + szam2;
    case "-":
      return szam1 - szam2;
    case "*":
      return szam1 * szam2;
    case "/":
      return szam2 !== 0 ? szam1 / szam2 : "Hiba";
    default:
      return "";
  }
}
