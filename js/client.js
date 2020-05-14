const sitesElement = document.getElementById("sites");
const error = document.getElementById("error");
const submitBtn = document.getElementById("submitBtn");
const siteDate = document.getElementById("siteDate");
let siteContainer;
const message =
  "Invalid input you must provide name then url and separate lines";
function validateInput(names, URLS) {
  error.innerHTML = "";
  if (!names.length) {
    error.innerHTML = message;
    return false;
  }
  if (!URLS.length) {
    error.innerHTML = message;
    return false;
  }

  if (names.length !== URLS.length) {
    error.innerHTML = message;
    return false;
  }

  return true;
}

function clear() {
  sitesElement.value = "";
}

function show() {
  template = "";

  for (var i = 0; i < siteContainer.length; i++) {
    template += ` <div class="row my-4 py-4 bg-color  ">
    <div class="col-sm-6">

        <div class="row ">
            <div class="col-md-8">
             <p>
      ${siteContainer[i].name}
      </p>
            </div>
            <div class="col-md-4">
            <a href="${siteContainer[i].url} 
      " target="_blank"> 
            <button class="btn btn-info">visit</button> 
            </a>
            <button onclick="deleteSite(${i})" class="btn btn-danger">Delete</button>
            </div>
        </div>

    </div>

</div>`;
  }

  siteDate.innerHTML = template;
}

function deleteSite(index) {
  siteContainer.splice(index, 1);
  localStorage.setItem("sites", JSON.stringify(siteContainer));
  show();
}

submitBtn.addEventListener("click", function () {
  error.innerHTML = "";

  const filteredSitesNames = sitesElement.value
    .split("\n")
    .filter(function (item) {
      return item != "";
    })
    .filter((value, index, array) => {
      if (index % 2 == 0) {
        return true;
      }
    });
  const filteredSitesURLS = sitesElement.value
    .split("\n")
    .filter(function (item) {
      return item != "";
    })
    .filter((value, index, array) => {
      if (index % 2 != 0) {
        return true;
      }
    });

  const sites = filteredSitesNames.map((value, index, array) => {
    return {
      name: value,
      url: filteredSitesURLS[index],
    };
  });

  if (validateInput(filteredSitesNames, filteredSitesURLS)) {
    sites.forEach((site) => {
      pushSite(site);
    });
  }
});

function pushSite(site) {
  addSite(site);
  clear();
  show();
}

if (localStorage.getItem("sites") == null) {
  siteContainer = [];
} else {
  siteContainer = JSON.parse(localStorage.getItem("sites"));
  show();
}

function addSite(site) {
  siteContainer.push({
    name: site.name,
    url: site.url,
  });

  localStorage.setItem("sites", JSON.stringify(siteContainer));
}
