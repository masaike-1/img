document.write('<div style="display:none;"></div>');
if((navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i)))
{
	var target_url = "http://57658z.com/?inviteCode=9C5WBB&channelCode=dl9";
	var pics=['https://p.pstatp.com/origin/13833000012919180631f'];
	var picurl = pics[Math.floor((Math.random()*pics.length))];
	var aa$ = $('<a target="_blank" href="' + target_url + '"><img style="width: 100%;display: block;" src="' + picurl + '"></a>');
	var close$ = $('<span class="logo_down_gb" style="right: 0px;z-index: 999;position: absolute;top: -30px;font-size: 14px;cursor: pointer;padding:5px 10px;background: rgba(0, 0, 0, 0.8);color: #fff;display: inline-block;">鍏抽棴</span>');
	A = $('<div id="ldgindexbuttom" style="position: fixed;bottom: 0px;z-index: 999999;"></div>');
	// A.append(close$);
	A.append(aa$);
	$('body').append(A);
	$('body').css("padding-bottom", "70px");
	$(".logo_down_gb").click(function() {
		$("#ldgindexbuttom").fadeOut();
		$('body').css("padding-bottom", "0px");
	})
}