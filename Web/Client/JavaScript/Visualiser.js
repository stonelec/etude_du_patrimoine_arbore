document.addEventListener('DOMContentLoaded', function() {
    // Sélectionner tous les boutons du groupe
    const buttons = document.querySelectorAll('.btn-tab-map .btn');

    // Ajouter un gestionnaire d'événements à chaque bouton
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Réinitialiser toutes les classes pour tous les boutons
            buttons.forEach(btn => {
                btn.classList.remove('btn-selected');
                btn.classList.add('btn-unselected');
            });

            // Ajouter la classe btn-selected au bouton cliqué
            button.classList.add('btn-selected');
            button.classList.remove('btn-unselected');

            // Afficher ou masquer les contenus en fonction du bouton cliqué
            if (button.querySelector('input').id === 'VisualiserTableau') {
                afficherTableau();
                document.getElementById('VisualisationTableau').style.display = 'block';
                // Si vous avez un autre contenu pour la carte, vous pouvez le masquer ici
                // document.getElementById('VisualisationCarte').style.display = 'none';
            } else if (button.querySelector('input').id === 'VisualiserCarte') {
                document.getElementById('VisualisationTableau').style.display = 'none';
                // document.getElementById('VisualisationCarte').style.display = 'block';
            }
        });
    });

    // On initialise les styles des boutons
    buttons.forEach(button => {
        button.classList.add('btn-unselected');
    });

    // Fonction pour afficher le tableau avec Bootstrap
    function afficherTableau() {
        const container = document.getElementById('VisualisationTableau');
        container.innerHTML = ''; // On supprime le contenu existant

        // On créé le tableau
        const table = document.createElement('table');
        table.classList.add('table', 'table-bordered', 'table-striped');

        const HeaderElement = [
            "ID", "Espèce", "Etat", "Stade de dev.", "Pied", "Port", "Remarquable", "Latitude", "Longitude", "Prédire"
        ];

        // On créé le header du tableau
        const thead = document.createElement('thead');
        const headRow = document.createElement('tr');
        for (let j = 0; j < 10; j++) {
            const th = document.createElement('th');
            th.textContent = HeaderElement[j];
            headRow.appendChild(th);
        }
        thead.appendChild(headRow);
        table.appendChild(thead);

        // Create 5 rows
        const tbody = document.createElement('tbody');
        for (let i = 0; i < 5; i++) {
            const row = document.createElement('tr');
            for (let j = 0; j < 10; j++) {
                const cell = document.createElement('td');
                cell.textContent = `Cell ${i + 1}-${j + 1}`; // Example cell content
                row.appendChild(cell);
            }
            tbody.appendChild(row);
        }
        table.appendChild(tbody);

        container.appendChild(table);
    }
});
