interactive form unit 3
In this project I took a basic webform and used js to add inner activity and enhanced usability. 
The code wriitern checks various feilds to make sure it contains the correct information, ansd display an error indication if it doesnt. 
The code should automatically focus on the first text field when the form loads. 
As the user completing the form makes selections parts of the form is automatically updated. 
An example of this is as the user chooses a design for the t-shirt the color will automatically be selected. 
while the user registers for activities in the conference the total cost will display below the list of activities, as well when a conflicting activity is selected the conflicting activity is greyed out. 
If the form is submitted without valid information the required fields will highlight red. 


website sources used for this project consist of:

https://www.w3schools.com/

https://developer.mozilla.org/en-US/

https://stackoverflow.com/

as well as the study guide videos 

Im looking for a meet expectations with this project!

//////////////////////////////////////////////////////////////////////////////////
I updated my code to reflect the comments below from the slack peer review channel:

The "other" field doesn't seem to be working.  It's hidden when the page loads, but when I select "other" from the job role select menu, it should apear, but it doesn't.
By default when the page loads, the credit card method should be selected.  Right now, when the page loads, the credit card method is shown, but the select menu still says "Select Payment Method". One other issue I'm seeing is, if I pull up your page and "hit" register I expect to see error indicators for name, email, activities, and the 3 credit card fields. Since you have the error for not having a payment method selected, the credit card errors don't fire.   Once you change it up so "Credit Card" is the selected payment method, I think this will work correctly.
I am running into some issue with the validations for the credit card fields.  The CC Num field should be 13 to 16 digits long, but the validtion is only looking at whether the field is blank or not.  The Zip Code should only except exactly 5 digits, but your validation allows for 5 or more.  The CVV is looking for exactly 3, so that is good.  However, in addition to checking the length of these fields, they should be checking whether the values only contain numbers.

/////////////////////////////////////////////////////////////////////////////
I recieved a meets expectations on the peer review Slack Channel 
////////////////////////////////////////////////////////////////////////
resubmitting this project to reflect reviewers comments for needs work 


