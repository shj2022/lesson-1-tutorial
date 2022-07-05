# tutorial_stepcounter

# Lesson 1: Calibrated Step Counter

## Step 1

In this tutorial, we will improve the accuracy of the physical activity monitor. On your screen is a part of the code for the step counter we built before. Today we will add to the ``||basic: forever||`` block to make a calibrated step counter.
```template
let counting = false
let step = 0
input.onButtonPressed(Button.A, function () {
    counting = true
})
input.onButtonPressed(Button.B, function () {
    counting = false
})
basic.forever(function () {
if(counting){

}
})
```

## Step 2
We want the ``||variables: step||`` count to increase by 1 every time you take a step. To accurately do that, we will use the ``||moveSMART:acceleration_strength()||`` value.

## Step 3
Use ``||logic: > ||`` to code a block that returns ``||logic: true||`` when ``||moveSMART:acceleration_strength()||`` is bigger than 1.5.
Hint: Here we have chosen the value 1.5 for you as a starting point. You will have a chance to change it later!
```blocks
if (moveSMART.acceleration_strength() < 0)
```

## Step 4
Now use the blocks ``||logic: if true then||`` and ``||variables: step||`` so that the step count increases whenever the acceleration strength is bigger than 1.5.

## Step 5
To complete the step counter, put the code in the mouth of the ``||logic: if(counting)||`` block.

## Step 6
Now download your code onto the microbit and experiment whether the threshold value is good! Try walking around thirty steps and check the accuracy. Adjust the threshold value from 1.5 and download the program again as necessary.