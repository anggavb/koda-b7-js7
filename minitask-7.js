const studentGrades = (student) => {
  let calculateGrades = []
  for (let i = 0; i < student.length; i++) {
    const studentName = student[i].name
    const grades = student[i].grades
    const { matematika, bahasa_inggris, bahasa_indonesia, ipa } = grades

    const average = (matematika + bahasa_inggris + bahasa_indonesia + ipa) / Object.entries(grades).length

    calculateGrades.push({
      studentName,
      average
    })
  }
  return calculateGrades
}

const students = [
  {
    name: 'Angga',
    grades: {
      matematika: 80,
      bahasa_inggris: 85,
      bahasa_indonesia: 65,
      ipa: 40,
    }
  },
  {
    name: 'Budi',
    grades: {
      matematika: 70,
      bahasa_inggris: 75,
      bahasa_indonesia: 80,
      ipa: 60,
    }
  },
  {
    name: 'Citra',
    grades: {
      matematika: 90,
      bahasa_inggris: 95,
      bahasa_indonesia: 85,
      ipa: 80,
    }
  }
]

const result = studentGrades(students)
for (let i = 0; i < result.length; i++) {
  console.log(`Nama: ${result[i].studentName}, Rata-rata Nilai: ${result[i].average}`)
}
