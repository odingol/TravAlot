// save attraction functionality
// get all save buttons save-attraction-btn
// add click event listener
//      - pull data-attraction-type and data-id attributes 
//  make api post call to save selection to db (endpoint needs to be added)


// const saveBtn = document.querySelectorAll('save-attraction-btn');

// for (let i = 0; i < saveBtn.length; i++) {
// saveBtn[i].addEventLisener('click', (event) => {

//     event.preventDefault();
//     let dataType = document.querySelectorAll('resort')[i];
//     let dataId = document.querySelectorAll('{{resort.id}}')[i];
//     let resortName = document.querySelectorAll('{{resort.name}}')[i];
//     let resortAddress = document.querySelectorAll('{{resort.address}}')[i];

//     const savedDestination = () => {
//         fetch('/api/resort', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({name: resortName, address: resortAddress})
//         })};
//         savedDestination();
// })};


async function loginFormHandler(event) {
    event.preventDefault();

    const email = document.querySelector('#loginEmail').value.trim();
    const password = document.querySelector('#loginPassword').value.trim();
    console.log(email, password);
    console.log('Button Clicked!');

    if (email && password) {
      const response = await fetch('/api/login/login', {
        method: 'post',
        body: JSON.stringify({
          email,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });

      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Incorrect email or password');
      }
    }
  }


document.querySelector('.formLogin').addEventListener('submit', loginFormHandler);
 
