document.getElementById("openButton").addEventListener("click", function() {
          var url = document.getElementById("urlInput").value;
          if (url.trim() !== "") {
              window.open(url, "_blank");
          }
      });
