window.onload = function () {

    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        dataPointWidthMax: 20,
        dataPointWidthMin: 5,
        labelWrap: true,

        title:{
            text: "",
            fontFamily: "arial black",
            fontColor: "#695A42"
        },
        axisX: {
            labelWrap: true,
            labelAutoFit: true,
        },
        axisY:{
        },
        toolTip: {
            shared: true,
            content: "<br/>{name}: <strong>{y}</strong>mn Units"
        },
        data: [{
            type: "stackedColumn",
            showInLegend: true,
            color: "#696661",
            name: "Lebron James",
            dataPoints: [
                { y: 45, label: 'GP' },
                { y: 3, label: 'MIN' },
                { y: 22, label: 'FGM' },
                { y: 17, label: 'FGA' },
                { y: 4, label: 'FGPCT' },
                { y: 6, label: 'FG3M' },
                { y: 9, label: 'FTM' },
                { y: 2, label: 'FTA'},
                { y: 4, label: 'FTPCT'},
                { y: 10, label: 'OREB'},
                { y: 20, label: 'DREB'},
                { y: 3, label: 'REB'},
                { y: 5, label: 'AST'},
                { y: 19, label: 'STL'},
                { y: 4, label: 'BLK'},
                { y: 6, label: 'TO'},
                { y: 8, label: 'PF'},
                { y: 12, label: 'PT'},

            ]
            },
            {        
                type: "stackedColumn",
                showInLegend: true,
                name: "Dwayne Wade",
                color: "#EDCA93",
                dataPoints: [
                    { y: 45, label: 'GP' },
                    { y: 3, label: 'MIN' },
                    { y: 22, label: 'FGM' },
                    { y: 17, label: 'FGA' },
                    { y: 4, label: 'FGPCT' },
                    { y: 6, label: 'FG3M' },
                    { y: 9, label: 'FTM' },
                    { y: 2, label: 'FTA'},
                    { y: 4, label: 'FTPCT'},
                    { y: 10, label: 'OREB'},
                    { y: 20, label: 'DREB'},
                    { y: 3, label: 'REB'},
                    { y: 5, label: 'AST'},
                    { y: 19, label: 'STL'},
                    { y: 4, label: 'BLK'},
                    { y: 6, label: 'TO'},
                    { y: 8, label: 'PF'},
                    { y: 12, label: 'PT'},
                ]
            },
            {        
                type: "stackedColumn",
                showInLegend: true,
                name: "Kawhi Leonard",
                color: "#695A42",
                dataPoints: [
                    { y: 45, label: 'GP' },
                { y: 3, label: 'MIN' },
                { y: 22, label: 'FGM' },
                { y: 17, label: 'FGA' },
                { y: 4, label: 'FGPCT' },
                { y: 6, label: 'FG3M' },
                { y: 9, label: 'FTM' },
                { y: 2, label: 'FTA'},
                { y: 4, label: 'FTPCT'},
                { y: 10, label: 'OREB'},
                { y: 20, label: 'DREB'},
                { y: 3, label: 'REB'},
                { y: 5, label: 'AST'},
                { y: 19, label: 'STL'},
                { y: 4, label: 'BLK'},
                { y: 6, label: 'TO'},
                { y: 8, label: 'PF'},
                { y: 12, label: 'PT'},
                ]
            },
            {        
                type: "stackedColumn",
                showInLegend: true,
                name: "Steph Curry",
                color: "#B6B1A8",
                dataPoints: [
                    { y: 45, label: 'GP' },
                { y: 3, label: 'MIN' },
                { y: 22, label: 'FGM' },
                { y: 17, label: 'FGA' },
                { y: 4, label: 'FGPCT' },
                { y: 6, label: 'FG3M' },
                { y: 9, label: 'FTM' },
                { y: 2, label: 'FTA'},
                { y: 4, label: 'FTPCT'},
                { y: 10, label: 'OREB'},
                { y: 20, label: 'DREB'},
                { y: 3, label: 'REB'},
                { y: 5, label: 'AST'},
                { y: 19, label: 'STL'},
                { y: 4, label: 'BLK'},
                { y: 6, label: 'TO'},
                { y: 8, label: 'PF'},
                { y: 12, label: 'PT'},
                ]
        }]
    });
    chart.render();
    
    //orginal function for data mouse over window
    // function toolTipContent(e) {
    //     var str = "";
    //     var total = 0;
    //     var str2, str3;
    //     for (var i = 0; i < e.entries.length; i++){
    //         var  str1 = "<span style= \"color:"+e.entries[i].dataSeries.color + "\"> "+e.entries[i].dataSeries.name+"</span>: $<strong>"+e.entries[i].dataPoint.y+"</strong>bn<br/>";
    //         total = e.entries[i].dataPoint.y + total;
    //         str = str.concat(str1);
    //     }
    //     str2 = "<span style = \"color:DodgerBlue;\"><strong>"+(e.entries[0].dataPoint.x).label()+"</strong></span><br/>";
    //     total = Math.round(total * 100) / 100;
    //     str3 = "<span style = \"color:Tomato\">Total:</span><strong> $"+total+"</strong>bn<br/>";
    //     return (str2.concat(str)).concat(str3);
    // }
    
    }