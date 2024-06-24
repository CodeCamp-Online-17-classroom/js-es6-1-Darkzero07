// จงเขียนฟังก์ชันหาค่าผลคูณของตัวเลข โดยพารามิเตอร์ของฟังก์ชันสามารถรับตัวเลขได้ไม่จำกัด

function multiplyNumbers(...numbers) {
  if (numbers.length === 0) {
    return 0;
  } else {
    return numbers.reduce((acc, num) => acc * num);
  }
}

console.log(multiplyNumbers(2, 3, 4)); // 24 (2 * 3 * 4 = 24)
console.log(multiplyNumbers(5, 6)); // 30 (5 * 6 = 30)
console.log(multiplyNumbers(10)); // 10
console.log(multiplyNumbers()); //0
