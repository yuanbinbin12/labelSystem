$(function ()
{
    function tableAndTdth ()
    {
        $("table").css(
            {
                "font-family": "verdana,arial,sans-serif",
        "font-size":"11px",
        "color":"#333333",
        "border-width": "1px",
        "border-color":"#666666",
       "border-collapse": "collapse"
    }
    )
        $("th").css(
            {
                "border-width": "1px",
        "padding": "8px",
        "border-style": "solid",
        "border-color": "#666666",
        "background-color": "#dedede"
    }
        )
        $("td").css(
            {
                "border-width": "1px",
                "padding": "8px",
                "border-style": "solid",
                "border-color": "#666666"
    }
        )
    }
})