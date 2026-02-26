const studentGrades = (grade) => {
  const { matematika, bahasa_inggris, bahasa_indonesia, ipa } = grade

  const total = matematika + bahasa_inggris + bahasa_indonesia + ipa
  const average = total / Object.entries(grade).length

  return { total, average }
}

const grades = {
  matematika: 80,
  bahasa_inggris: 85,
  bahasa_indonesia: 65,
  ipa: 40,
}

const { total, average} = studentGrades(grades)
console.log(`Total nilai: ${total}`)
console.log(`Nilai rata-rata: ${average}`)
