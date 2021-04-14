// 1. Create an array named numbers and store 5 number values in it
let numbers = [1,4,6,2,9];
// 2. Calculate the sum of array items and print it to the console using console.log()
let sum = 0;
for(let i=0; i<numbers.length; i++)
{
sum = sum + numbers[i];
console.log(sum);
}
console.log(sum);
// 3. Calculate the average of array items and print it to the console using console.log()
let avg=0
for(let i=0; i<numbers.length; i++)
{
sum = sum + numbers[i];
}
avg = sum/numbers.length;
console.log(`Average is ${avg}`);
// 4. Find the highest number in the array and print it to the console using console.log()
let high=numbers[0];
for(let i=0; i<numbers.length; i++)
{
if (high<numbers[i])
{
    high =numbers[i];
}
else continue;
}
console.log(`The highest number is ${high}`);
// 5. Find the lowest number in the array and print it to the console using console.log()
let low=numbers[0];
for(let i=0; i<numbers.length; i++)
{
if (low>numbers[i])
{
    low = numbers[i];
}
else continue;
}
console.log(`The lowest number is ${low}`);
// 6. Find the even numbers in the array and print them to the console using console.log()
for(let i=0; i<numbers.length; i++)
{
if (numbers[i]%2==0)
{
    console.log(numbers[i]);
}
else continue;
}
// 7. Find the odd numbers in the array and print them to the console using console.log()
for(let i=0; i<numbers.length; i++)
{
if (numbers[i]%2!=0)
{
    console.log(numbers[i]);
}
else continue;
}
// 8. Find the numbers in the array that is divisible by 5 and print them to the console using console.log()
for(let i=0; i<numbers.length; i++)
{
if (numbers[i]%5==0)
{
    console.log(numbers[i]);
}
else continue;
}
// 9. Log all the element of the array one by one
// for(let i=0; i<numbers.length; i++)
// {
// console.log(numbers[i]);
// }
// 10. Find all the number in the array that is divisible by 3
for(let i=0; i<numbers.length; i++)
{
if (numbers[i]%3==0)
{
    console.log(numbers[i]);
}
else continue;
}