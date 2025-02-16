document.addEventListener("DOMContentLoaded", function () {
    fetchInvoices();
});

function fetchInvoices() {
    fetch('../invoice')
        .then(res => res.json())
        .then(res => {
            var invoiceListNode = document.getElementById('invoice-list');
            invoiceListNode.innerHTML = "";

            var table = document.createElement("table");
            table.setAttribute("border", "1");
            invoiceListNode.appendChild(table);

            res.forEach(invoice => {
                var tr = document.createElement("tr");
                table.appendChild(tr);

                var td = document.createElement("td");
                td.textContent = invoice.number;
                tr.appendChild(td);

                td = document.createElement("td");
                td.textContent = invoice.customerName;
                tr.appendChild(td);

                td = document.createElement("td");
                var button = document.createElement("button");
                button.setAttribute("type", "button");
                button.textContent = "Détails";
                button.onclick = function () {
                    showDetail(invoice.number);
                };
                td.appendChild(button);
                tr.appendChild(td);
            });
        })
        .catch(error => console.error("Erreur lors du chargement des factures :", error));
}

function showDetail(invoiceNumber) {
    fetch(`../invoice/${invoiceNumber}`)
        .then(res => res.json())
        .then(res => {
            var invoiceDetailNode = document.getElementById('invoice-detail');
            invoiceDetailNode.innerHTML = "";

            var details = [
                `Numéro : ${res.number}`,
                `Nom du client : ${res.customerName}`,
                `Numéro de commande : ${res.orderNumber}`
            ];

            details.forEach(text => {
                var p = document.createElement("p");
                p.textContent = text;
                invoiceDetailNode.appendChild(p);
            });
        })
        .catch(error => console.error("Erreur lors du chargement des détails de la facture :", error));
}
