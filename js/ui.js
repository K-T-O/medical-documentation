function decorateMedicine(medicine) {
    return (medicine.name ? ('<span class="medicineName">' + medicine.name + '</span>') : '') +
        ((medicine.name && medicine.comments) ? ' - ' : '') +
        (medicine.comments ? ('<span class="medicineComment">' + medicine.comments + '</span>') : (''));
};
function medicinesToUI(medicines) {
    var result = [ ];
    for (var i = 0; i < medicines.length; ++i) {
        result.push(decorateMedicine(medicines[i]));
    }
    return result;
};
function decorateScan(scan) {
    return '<a href="' + pathToScans + scan.link + '" target="_blank" class="scan" title="' + scan.tags + '">' + scan.description + '</a>; ';
};
function decorateScans(scans) {
    var res = '<p class="scans"><strong>Dokumentacja:</strong> ';
    for (var i = 0; i < scans.length; ++i) {
        res += decorateScan(scans[i]);
    }
    return res + "</p>";
};
function contains(s1, s2) {
    return s1 && s2 && s1.toLowerCase().indexOf(s2.toLowerCase()) > -1;
};
function searchScans(data, needle) {
    var results = [ ];
    for (var i = 0; i < data.length; ++i) {
        for (var j = 0; j < data[i].scans.length; j++) {
            var scan = data[i].scans[j];
            if (contains(scan.description, needle) || contains(scan.tags, needle)) {
                results.push({date: data[i].date, scan: scan});
            }
        }
    }
    return results;
};
function searchResultToggle(element) {
    $(element).toggleClass('dropup');
    $(element.nextSibling).toggle();
    return false;
};
function writeScans(scans, needle) {
    function decorateScanDate(date, scan) {
        return '<div><div class="searchResultDate">' + date + '</div>' +
            ' <a href="' + pathToScans + scan.link + '" target="_blank"> <span class="glyphicon glyphicon-picture"></span></a> ' +
            '<a href="#" onclick="return searchResultToggle(this);">' + scan.description + '<span class="caret"></span></a>' +
            '<p class="searchResultTags">' + scan.tags + '</p>'
            + '</div>';
    }
    var content = "";
    for (var i = 0; i < scans.length; ++i) {
        content += decorateScanDate(scans[i].date, scans[i].scan);
    }
    $('#searchResultsContent').html(content);
    $("#searchResultsContent p").highlight(needle, {className: "searchHighlight"});
};
function decorateTag(tag, value) {
    return ['<', tag, '>', value, '</', tag, '>'].join("");
};
function scansToLinks(scans) {
    var result = [ ];
    for (var i = 0; i < scans.length; ++i) {
        result.push(decorateScan(scans[i]));
    }
    return result;
};
function generateBlock(title, entries) {
    return entries.length > 0 ? '<div class="row"><div class="col-md-1 panel">' + title + '</div><div class="col-md-11">' + entries.join('; ') + '</div></div>' : '';
};
function generateHistoryContent(data) {
    var content = "";
    for (var i = 0; i < data.length; ++i) {
        var entry = data[i];
        content +=
            // panel-' + entry.type + '
            '<div class="panel panel-default">' +
                '<div class="panel-heading"><h3 class="panel-title">'
                + entry.category + ' (' + entry.date + ')</h3>' +
                '</div><div class="panel-body">' +
                generateBlock('Typ', [entry.type]) +
                generateBlock('Objawy', entry.symptoms) +
                generateBlock('Rozpoznanie', entry.diagnoses) +
                generateBlock('Leczenie', medicinesToUI(entry.medicines)) +
                '</div><div class="panel-footer">'+ decorateScans(entry.scans) +
                '</div></div>';
    }
    return content;
};
function generateTableContent(data) {
    var content = "";
    for (var i = 0; i < data.length; ++i) {
        var entry = data[i];
        content += decorateTag("tr",
            decorateTag("td", entry.date) +
                decorateTag("td", entry.type) +
                decorateTag("td", entry.category) +
                decorateTag("td", entry.symptoms.join("<br/>")) +
                decorateTag("td", entry.diagnoses.join("<br/>")) +
                decorateTag("td", medicinesToUI(entry.medicines).join("<br/>")) +
                decorateTag("td", scansToLinks(entry.scans).join("<br/>")));
    }
    return content;
};
function writeTableContent(data) {
    $('#tableContentPlaceholder').html(generateTableContent(data));
};
function writeHistoryContent(data) {
    $('#historyContentPlaceholder').html(generateHistoryContent(data));
};