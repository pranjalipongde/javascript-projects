class Service {
  constructor(serviceCode, serviceName, hatchbackPrice, sedanPrice, suvPrice) {
    this.serviceCode = serviceCode;
    this.serviceName = serviceName;
    this.hatchbackPrice = hatchbackPrice;
    this.sedanPrice = sedanPrice;
    this.suvPrice = suvPrice;
  }
}

const services = [
  new Service("BS01", "Basic Servicing", 2000, 4000, 5000),
  new Service("EF01", "Engine Fixing", 5000, 8000, 10000),
  new Service("CF01", "Clutch Fixing", 2000, 4000, 6000),
  new Service("BF01", "Brake Fixing", 1000, 1500, 2500),
  new Service("GF01", "Gear Fixing", 3000, 6000, 8000),
];

function generateBill() {
  const carType = document.getElementById("car-type").value;
  const serviceCodes = document
    .getElementById("service-codes")
    .value.split(",");
  let total = 0;
  let complimentary = false;
  let billTable = document.getElementById("bill-table");
  billTable.innerHTML = "";
  let totalPriceElement = document.getElementById("total-price");
  let complimentaryElement = document.getElementById("complimentary");
  for (let i = 0; i < serviceCodes.length; i++) {
    const service = services.find((s) => s.serviceCode === serviceCodes[i]);
    if (service) {
      let price = 0;
      switch (carType) {
        case "hatchback":
          price = service.hatchbackPrice;
          break;
        case "sedan":
          price = service.sedanPrice;
          break;
        case "suv":
          price = service.suvPrice;
          break;
      }
      total += price;
      let row = billTable.insertRow();
      let nameCell = row.insertCell(0);
      let priceCell = row.insertCell(1);
      nameCell.innerHTML = service.serviceName;
      priceCell.innerHTML = `₹${price}`;
    }
  }
  totalPriceElement.innerHTML = total;
  if (total > 10000) {
    complimentary = true;
    complimentaryElement.style.display = "block";
  } else {
    complimentaryElement.style.display = "none";
  }
  let billContainer = document.getElementsByClassName("bill-container")[0];
  billContainer.style.display = "block";
}
