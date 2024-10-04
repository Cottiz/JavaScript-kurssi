// Tehtävä 1

function changeHeading() {
    // Etsii otsikkoa "Workshop 4"
    const headings = document.querySelectorAll('h1');
    
    // katsoo kaikki otsikot "Workshop 4"
    headings.forEach(heading => {
        if (heading.textContent.includes('Workshop 4')) {
            // Vaihtaa otsikoksi "Modified Heading!"
            heading.textContent = 'Modified Heading!';
        }
    });
}

    // Button 2 script
    function changeStyle(){
    const headings = document.querySelectorAll('h2');
    headings.forEach(heading => {
        if (heading.textContent.includes('Exercise 2')) {
            // Vaihtaa otsikon fonttikoon, tyylin, värin ja taustavärin
            heading.style.fontSize = '30px';
            heading.style.fontStyle = 'italic';
            heading.style.color = 'purple';
            heading.style.backgroundColor = 'lightgrey'
        }
    });
}

    //Button 3 script
    
    function appendParagraph() {
    const paragraphs = document.querySelectorAll('p');
            
        if (paragraphs.length >= 4) {
            // Luo uuden tekstirivin
            const newParagraph = document.createElement('p');
            // Lisää tekstin italics muodossa ja boldaa Lorem ipsum kohdan
            newParagraph.innerHTML = '<strong><em>&quot;Lorem ipsum</strong> dolor sit amet, consectetuer adipiscing elit. Sed posuere interdum sem. Quisque ligula eros ullamcorper quis, lacinia quis facilisis sed sapien. Mauris varius diam vitae arcu. Sed arcu lectus auctor vitae, consectetuer et venenatis eget velit. &quot</em>';
            // Lisää uuden tekstirivin neljännen rivin jälkeen.
            paragraphs[3].after(newParagraph);

            // Lisää kuvan tekstirivin perään
            const logoImage = document.createElement('img');
            logoImage.src = 'https://via.placeholder.com/150'; // Placeholder image URL
            logoImage.alt = 'Logo';
            newParagraph.after(logoImage);
            
            // Ja vaihtaa koko taustan värin
            document.body.style.backgroundColor = '#f0f8ff'; 
        } else {
            console.log("Not enough paragraphs to append after.");
        }
    }

    // Tehtävä 2 
    function hide() {
        const element = document.getElementById('me');
            if (element) {
                element.style.display = 'none';
            }
    }

    function show() {
        const element = document.getElementById('me')
            if (element) {
                element.style.display = 'block';
            }
    }

    function surprise() {
        const elements = document.querySelectorAll('.surprise');
        elements.forEach(element => {
            element.style.fontSize = '20px';
           });
    }
    
    // Tehtävä 3
    // ilmoittaa valinnasta
    function selectedOption() {
        const carImage = document.getElementById('carimage');
        const valittu = document.getElementById('mySelect');
        const selectedValue = valittu.value
        alert('Valintasi oli: '+ selectedValue);
    
    // vaihtaa kuvan vastauksen perusteella
    
        switch (selectedValue) {
            case 'BMW':
                carImage.src = 'https://cdn.pixabay.com/photo/2016/02/22/20/22/bmw-1216469_1280.jpg';
                break;
            case 'Audi':
                carImage.src = 'https://cdn.pixabay.com/photo/2018/04/28/13/28/car-3357296_640.jpg';
                break;
            case 'Mercedes':
                carImage.src = 'https://cdn.pixabay.com/photo/2018/08/05/07/39/mercedes-benz-3585098_640.jpg';
                break;
            case 'Volvo':
                carImage.src = 'https://cdn.pixabay.com/photo/2021/11/03/07/16/car-6764878_1280.jpg';
                break;
            default:
                carImage.src = 'https://cdn.pixabay.com/photo/2016/02/22/20/22/bmw-1216469_1280.jpg';
                break;
        }	
    }

    // kun hiiri liikkuu päälle tulee punainen kehys
    function showBorder() {
        const carImage = document.getElementById('carimage');
            if (carImage) {
            carImage.style.border = '10px solid red';
        }
    }	

    // kun hiiri liikkuu pois kuvan päältä niin kehys poistuu
    function hideBorder() {
        const carImage = document.getElementById('carimage');
        if (carImage) {
            carImage.style.border = 'none';
        }
    }

    // Tehtävä 4
    // vaihtaa kuvan paikkaa Move nappulalla
    function changePosition() {
        const carImage = document.getElementById('carimage');
        carImage.style.position = 'relative';
        carImage.style.left = '200px';
        carImage.style.top = '500px';
    }
    
    // animoi eli siirtää kuvaa pitkin ruutua
    let posX = 0;
    let posY = 0;
    let directionX = 1;
    let directionY = 1;

        function doMove() {
            const carImage = document.getElementById('carimage');
            carImage.style.position = 'relative';
            posX += 5 * directionX;
            posY += 5 * directionY;

            if (posX > window.innerWidth - carImage.width || posX < 0) {
                directionX *= -1;
            }
            if (posY > window.innerHeight - carImage.height || posY < 0) {
                directionY *= -1;
            }

            carImage.style.left = posX + 'px';
            carImage.style.top = posY + 'px';
    }

    function startAnimation() {
        setInterval(doMove, 1000);
    }
    
    //muuttaa kuvan pikkuhiljaa läpinäkyväksi
    function fadeOut() {
        const carImage = document.getElementById('carimage');
        let opacity = 1.0;
        const interval = setInterval(() =>{
            if (opacity <= 0) {
                clearInterval(interval);
            } else {
                opacity -= 0.02;
                carImage.style.opacity = opacity;
            }
        }, 250);
    }

    //poistaa kuvan
    function remove() {
        const carImage = document.getElementById('carimage');
        carImage.remove();
    }
    
    // Tehtävä 5
    // lisää rivejä taulukkoon
    function insertRows() {
        
        const name = document.getElementById('textfield');
        const position = document.getElementById('textfield2');
        const salary = document.getElementById('textfield3');

        const table = document.getElementById('data').getElementsByTagName('tbody')[0];

        const newRow = table.insertRow();

        const cell1 = newRow.insertCell(0);
        const cell2 = newRow.insertCell(1);
        const cell3 = newRow.insertCell(2);

        cell1.textContent = name.value;
        cell2.textContent = position.value;
        cell3.textContent = salary.value;
    }
