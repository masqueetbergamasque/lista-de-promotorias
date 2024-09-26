// JavaScript Document
document.addEventListener('DOMContentLoaded', function() {
    var searchInput = document.getElementById('searchInput');
    var cards = document.querySelectorAll('.card');
    var comarcas = document.querySelectorAll('.comarca');

    searchInput.oninput = function() {
        var filter = searchInput.value.toUpperCase();

        cards.forEach(function(card) {
            var text = card.textContent || card.innerText;
            card.style.display = text.toUpperCase().includes(filter) ? "" : "none";
        });

        comarcas.forEach(function(comarca) {
            var visibleCards = comarca.querySelectorAll('.card:not([style*="display: none"])');
            comarca.style.display = visibleCards.length > 0 ? "" : "none";
        });
    };
});
