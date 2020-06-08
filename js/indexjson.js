$.ajax({
    url: "../",
    success: function(data) {
        var parser = new DOMParser(),
            doc = parser.parseFromString(data, 'text/html');

        //output the file table
        $("#files").append(doc.querySelector('table').outerHTML);

        //or return the number of files
        //tr = icon, filename, date, size, desc
        //consider all rows with a size value holding a number as a vlid file
        var fileCount = 0,
            rows = doc.querySelector('table').querySelectorAll('tr');

        for (var i=0;i<rows.length;i++) {
            if (rows[i].children[3]) {
                if (parseInt(rows[i].children[3].innerText)>0) fileCount++;
            }
        }
        $("#fileCount").text(fileCount+' files');
    }
});
