// save attraction functionality
// get all save buttons save-attraction-btn
// add click event listener
//      - pull data-attraction-type and data-id attributes 
//  make api post call to save selection to db (endpoint needs to be added)


const saveBtn = document.querySelectorAll('save-attraction-btn');

for (let i = 0; i < saveBtn.length; i++) {
saveBtn[i].addEventLisener('click', (event) => {

    event.preventDefault();
    let dataType = document.querySelectorAll('resort')[i];
    let dataId = document.querySelectorAll('{{resort.id}}')[i];
    let resortName = document.querySelectorAll('{{resort.name}}')[i];
    let resortAddress = document.querySelectorAll('{{resort.address}}')[i];

    const savedDestination = () => {
        fetch('/api/resort', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({name: resortName, address: resortAddress})
        })};
        savedDestination();
})};
 
