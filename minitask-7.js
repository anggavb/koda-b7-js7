const studentGrades = (grade) => {
  const { matematika, bahasa_inggris, bahasa_indonesia, ipa } = grade

  return (matematika + bahasa_inggris + bahasa_indonesia + ipa) / Object.entries(grades).length
}

const grades = {
  matematika: 80,
  bahasa_inggris: 85,
  bahasa_indonesia: 65,
  ipa: 40,
}

const result = studentGrades(grades)
console.log(`Nilai rata-rata: ${result}`)
