//获取本地设置的Snippet
function GetSnippetText() {
	var snippet = "\n\
snippet local Create Variable (Tạo biến)\n\
	local ${1:val} = 0\n\
snippet local Create Empty Table (Tạo bảng rỗng)\n\
	local ${1:tab}= {} \n\
snippet function Create Function (Tạo hàm)\n\
	function ${1:game}(obj) \n\
		${2:--Function body (Thân hàm)}\n\
	end\n\
snippet if Conditional Statement (Câu lệnh điều kiện)\n\
	if ${1:true} then\n\
		${2:--Execute if condition is true (Thực thi nếu điều kiện đúng)}\n\
	end\n\
snippet if.else Conditional Statement (Câu lệnh điều kiện if-else)\n\
	if ${1:true} then\n\
		${2:--Execute if condition is true (Thực thi nếu điều kiện đúng)}\n\
	else\n\
		${3:--Execute if condition is false (Thực thi nếu điều kiện sai)}\n\
	end\n\
snippet for Loop Statement (Vòng lặp for)\n\
	for i = 0 ,${1:10} do\n\
		--Loop body (Thân vòng lặp)\n\
		print(i)\n\
	end\n\
snippet for pairs Iterator Statement (Câu lệnh lặp pairs)\n\
	for k ,v in pairs(${1:tab}) do\n\
		--Loop body (Thân vòng lặp)\n\
		print(k,v)\n\
	end\n\
snippet while Loop Statement (Vòng lặp while)\n\
	${1:val} = 0\n\
	while ${2:val < 5} do\n\
		${3:--Loop until val is false (Lặp cho đến khi val sai)}\n\
		${4:val = val + 1}\n\
	end\n\
snippet repeat Loop Statement (Vòng lặp repeat)\n\
	${1:val} = 0\n\
	repeat\n\
		${2:--Loop until val is false (Lặp cho đến khi val sai)}\n\
		${3:val = val + 1}\n\
	until ${4:val > 5}\n\
snippet math.sin Trigonometric Function - Sine (Hàm lượng giác - sin)\n\
	math.sin(${1:deg})\n\
snippet math.asin Arcsine (Arcsin)\n\
	math.asin(${1:rad})\n\
snippet math.cos Cosine (Cos)\n\
	math.cos(${1:deg})\n\
snippet math.acos Arccosine (Arccos)\n\
	math.acos(${1:rad})\n\
snippet math.tan Tangent (Tan)\n\
	math.tan(${1:deg})\n\
snippet math.atan Arctangent (Arctan)\n\
	math.atan(${1:rad})\n\
snippet math.exp e to the power of x (e mũ x)\n\
	math.exp(${1:x})\n\
snippet math.log Natural logarithm of x (Logarithm tự nhiên của x)\n\
	math.log(${1:x})\n\
snippet math.log10 Base-10 logarithm of x (Logarithm cơ số 10 của x)\n\
	math.log(${1:x})\n\
snippet math.frexp Split val into x*(2^y) form (Tách val thành dạng x*(2^y))\n\
	math.frexp(${1:val})\n\
snippet math.ldexp Calculate x*(2^y) (Tính x*(2^y))\n\
	math.ldexp(${1:x},y)\n\
snippet math.pi Pi constant (Hằng số Pi)\n\
	math.pi\n\
snippet math.abs Absolute value (Giá trị tuyệt đối)\n\
	math.abs(${1:val})\n\
snippet math.pow Power operation (Lũy thừa)\n\
	math.pow(${1:m},n)\n\
snippet math.sqrt Square root (Căn bậc hai)\n\
	math.sqrt(${1:m})\n\
snippet math.mod Modulo (Lấy phần dư)\n\
	math.mod(${1:val1},val2)\n\
snippet math.modf Get integer and decimal parts (Lấy phần nguyên và phần thập phân)\n\
	math.modf(${1:float})\n\
snippet math.rad Degrees to radians (Độ sang radian)\n\
	math.rad(${1:val})\n\
snippet math.deg Radians to degrees (Radian sang độ)\n\
	math.deg(${1:val})\n\
snippet math.floor Floor (round down) (Làm tròn xuống)\n\
	math.floor(${1:val})\n\
snippet math.ceil Ceiling (round up) (Làm tròn lên)\n\
	math.ceil(${1:val})\n\
snippet math.max Get maximum value (Lấy giá trị lớn nhất)\n\
	math.max(${1:str})\n\
snippet math.min Get minimum value (Lấy giá trị nhỏ nhất)\n\
	math.min(${1:str})\n\
snippet math.randomseed Random seed (Hạt giống số ngẫu nhiên)\n\
	math.randomseed(os.time())\n\
snippet math.random Get random number (0-1) (Số ngẫu nhiên 0-1)\n\
	math.random()\n\
snippet math.random Get random number (0-n) (Số ngẫu nhiên 0-n)\n\
	math.random(${1:n})\n\
snippet math.random Get random number (m-n) (Số ngẫu nhiên m-n)\n\
	math.random(${1:m},n)\n\
snippet table.insert Insert at end (Chèn vào cuối)\n\
	table.insert(${1:tab}, ${2:val})\n\
snippet table.insert Insert at position n (Chèn vào vị trí n)\n\
	table.insert(${1:tab},${2:n},${3:val})\n\
snippet table.remove Remove last element (Xóa phần tử cuối)\n\
	table.remove(${1:tab})\n\
snippet table.remove Remove element at position n (Xóa phần tử tại vị trí n)\n\
	table.remove(${1:tab},n)\n\
snippet table.remove Concatenate string (Nối chuỗi)\n\
	table.remove(${1:tab})\n\
snippet table.remove Concatenate string with separator (Nối chuỗi với ký tự phân cách)\n\
	table.remove(${1:tab},',')\n\
snippet table.remove Concatenate string with index and separator (Nối chuỗi với chỉ mục và ký tự phân cách)\n\
	table.remove(${1:tab},',',m,n)\n\
snippet table.sort Sort ascending (Sắp xếp tăng dần)\n\
	table.sort(${1:tab})\n\
snippet table.sort Sort descending (Sắp xếp giảm dần)\n\
	table.sort(${1:tab}, function (a, b) if a > b then return true end end)  --Sort elements in tab z-a descending (Sắp xếp giảm dần)\n\
snippet OS library clock - Get CPU approximate value (Lấy giá trị xấp xỉ CPU)\n\
	os.clock() --Returns approximate CPU time used (Trả về thời gian CPU đã dùng)\n\
snippet OS library time - Get time (Lấy thời gian)\n\
	os.time() --Returns seconds from 1970.1.1 to now (Trả về số giây từ 1970.1.1 đến hiện tại)\n\
snippet OS library difftime - Return time difference (Trả về hiệu thời gian)\n\
	os.difftime(m,n) --Returns time difference m-n, m/n can be obtained with os.time() (Trả về hiệu thời gian m-n)\n\
snippet OS library date - Time list (Danh sách thời gian)\n\
	os.date('*t') --Returns current time as a table (Trả về bảng thời gian hiện tại)\n\
snippet OS library date - String parameters (Tham số chuỗi)\n\
	--%a  Abbreviated weekday name (Tên ngày viết tắt - Wed)\n\
	--%A  Full weekday name (Tên ngày đầy đủ - Wednesday)\n\
	--%b  Abbreviated month name (Tên tháng viết tắt - Sep)\n\
	--%B  Full month name (Tên tháng đầy đủ - September)\n\
	--%c  Date and time (Ngày và giờ - 09/16/98 23:48:10)\n\
	--%d  Day of month [0~31] (Ngày trong tháng)\n\
	--%H  Hour in 24h format [00~23] (Giờ 24h)\n\
	--%I  Hour in 12h format [01~12] (Giờ 12h)\n\
	--%j  Day of year [01~366] (Ngày trong năm)\n\
	--%M  Minutes [00~59] (Phút)\n\
	--%m  Month number [01~12] (Số tháng)\n\
	--%P  AM or PM (Sáng/Chiều)\n\
	--%S  Seconds [00~59] (Giây)\n\
	--%w  Day of week [0~6 = Sunday~Saturday] (Ngày trong tuần)\n\
	--%W  Week of year 0~52 (Tuần trong năm)\n\
	--%x  Date (Ngày - 09/16/98)\n\
	--%X  Time (Giờ - 23:48:10)\n\
	--%y  Two-digit year [00~99] (Năm 2 chữ số)\n\
	--%Y  Full year (Năm đầy đủ)\n\
	--%%  Literal '%' character (Ký tự '%')\n\
snippet string.len Length (Độ dài)\n\
	string.len(${1:str}) --Returns string length, does not support Chinese (Trả về độ dài chuỗi, không hỗ trợ tiếng Trung)\n\
snippet string.sub Substring (Cắt chuỗi)\n\
	string.sub(${1:str},m,n) --Returns content from position m to n in str (Trả về nội dung từ vị trí m đến n)\n\
snippet string.rep Repeat (Lặp lại)\n\
	string.rep(${1:str},n) --Repeat str n times and return result (Lặp lại str n lần)\n\
snippet string.lower Convert to lowercase (Chuyển sang chữ thường)\n\
	string.lower(${1:str}) --Convert uppercase to lowercase in str (Chuyển chữ hoa thành chữ thường)\n\
snippet string.upper Convert to uppercase (Chuyển sang chữ hoa)\n\
	string.upper(${1:str}) --Convert lowercase to uppercase in str (Chuyển chữ thường thành chữ hoa)\n\
snippet string.char Convert character (Chuyển đổi ký tự)\n\
	string.char(${1:ASCII}) --Convert ASCII code to character (Chuyển ASCII sang ký tự)\n\
snippet string.byte Convert to ASCII code (Chuyển sang mã ASCII)\n\
	string.byte(${1:str},n) --Returns ASCII code of n-th character in str (Trả về mã ASCII ký tự thứ n)\n\
snippet string.reverse Reverse string (Đảo ngược chuỗi)\n\
	string.reverse(${1:str}) --Reverse the string (Đảo ngược chuỗi)\n\
snippet string.format Format string (Định dạng chuỗi)\n\
	string.format(${1:val},str) --Format str according to val parameter (Định dạng str theo tham số val)\n\
snippet string.find String search (Tìm kiếm chuỗi)\n\
	string.find(${1:str},n,1) --Search for n in str and return position (Tìm n trong str và trả về vị trí)\n\
snippet string.gmatch String search iterator (Tìm kiếm chuỗi bằng iterator)\n\
	string.gmatch(${1:str},st) --Iterator search for st in str, returns st if found (Tìm kiếm st trong str)\n\
snippet string.match String matching (So khớp chuỗi)\n\
	string.match(${1:st1},st2) --Find only the first match of st2 in st1 and return it (Tìm khớp đầu tiên của st2 trong st1)\n\
snippet string.gsub String replace (Thay thế chuỗi)\n\
	string.gsub(${1:str},m,n,num) --Replace m with n in str, num times (Thay m bằng n trong str, num lần)\n\
snippet string library - Pattern matching escape codes (Mã thoát khớp mẫu)\n\
	--.(dot): Matches any character (Khớp bất kỳ ký tự nào)\n\
	--%a: Matches any letter (Khớp bất kỳ chữ cái)\n\
	--%c: Matches any control character (Khớp ký tự điều khiển)\n\
	--%d: Matches any digit (Khớp chữ số)\n\
	--%l: Matches any lowercase letter (Khớp chữ thường)\n\
	--%p: Matches any punctuation (Khớp dấu câu)\n\
	--%s: Matches whitespace (Khớp khoảng trắng)\n\
	--%u: Matches any uppercase letter (Khớp chữ hoa)\n\
	--%w: Matches any letter or digit (Khớp chữ/số)\n\
	--%x: Matches any hexadecimal digit (Khớp số hex)\n\
	--%z: Matches any zero character (Khớp ký tự 0)\n\
	--%x(non-alphanumeric x): Matches character x, used for special pattern chars (^$()%.[]*+-?) (Khớp ký tự x đặc biệt)\n\
	--[char classes]: Matches any character in [] e.g. [%w_] matches letter/digit/underscore (Khớp ký tự trong [])\n\
	--[^char classes]: Matches any character NOT in [] e.g. [^%s] matches non-whitespace (Khớp ký tự không trong [])\n\
snippet string library - Format escape codes (Mã thoát định dạng chuỗi)\n\
	--%s - Accept a string and format it according to given parameters (Nhận chuỗi và định dạng)\n\
	--%d - Accept a number and convert to signed integer (Chuyển số sang số nguyên có dấu)\n\
	--%f - Accept a number and convert to float, default 6 decimal places (Chuyển sang số thực, mặc định 6 chữ số thập phân)\n\
	--%x - Accept a number and convert to lowercase hex (Chuyển sang hex thường)\n\
	--%X - Accept a number and convert to uppercase hex (Chuyển sang hex hoa)\n\
	--%c - Accept a number and convert to ASCII character (Chuyển số sang ký tự ASCII)\n\
	--%d, %i - Accept a number and convert to signed integer format (Số nguyên có dấu)\n\
	--%o - Accept a number and convert to octal (Chuyển sang bát phân)\n\
	--%u - Accept a number and convert to unsigned integer (Số nguyên không dấu)\n\
	--%x - Accept a number and convert to hex using lowercase (Hex chữ thường)\n\
	--%X - Accept a number and convert to hex using uppercase (Hex chữ hoa)\n\
	--%e - Accept a number and convert to scientific notation using lowercase e (Ký hiệu khoa học chữ thường)\n\
	--%E - Accept a number and convert to scientific notation using uppercase E (Ký hiệu khoa học chữ hoa)\n\
	--%f - Accept a number and convert to float format (Định dạng số thực)\n\
	--%g(%G) - Accept a number and use shorter of %e(%E) or %f (Dùng dạng ngắn hơn giữa %e và %f)\n\
	--%q - Accept a string and convert to format safely readable by Lua compiler (Định dạng an toàn cho Lua)\n\
	--%s - Accept a string and format it according to given parameters (Định dạng chuỗi)\n\
snippet String application - Convert number to Chinese (Ứng dụng chuỗi - Chuyển số sang chữ)\n\
	local function ToCN(number)\n\
		local tostr = tostring(number) --Convert input number to string (Chuyển số đầu vào thành chuỗi)\n\
		local strsize = #tostr --Get input string length (Lấy độ dài chuỗi)\n\
		local strCN = ''   --Create empty string to store result (Tạo chuỗi rỗng lưu kết quả)\n\
		local tabCN = {'一','二','三','四','五','六','七','八','九'}  --Chinese number template list (Bảng chữ số Trung)\n\
		for i = 1 , strsize do\n\
			--Loop based on string length (Lặp theo độ dài chuỗi)\n\
			local substr = string.sub(tostr,i,i)  --Get i-th character of string (Lấy ký tự thứ i)\n\
			local tonum = tonumber(substr)   --Convert string to number (Chuyển chuỗi thành số)\n\
			strCN = strCN..tabCN[tonum]  --Get corresponding Chinese numeral (Lấy chữ số Trung tương ứng)\n\
		end\n\
		return strCN\n\
	end\n\
	Chat:sendSystemMsg((ToCN(520)), 0) --Pass number and print converted result in chat (Truyền số và in kết quả vào chat)\n\
snippet Wait (Chờ)\n\
	threadpool:wait(${1:second})--Wait x seconds (Chờ x giây)\n\
snippet Player click block event (Sự kiện người chơi click vào khối)\n\
	function ClickBlock(obj)\n\
	--Function body executed after clicking block (Thân hàm thực thi sau khi click khối)\n\
		local playerid = obj.eventobjid--Character ID (ID nhân vật)\n\
		local blockid = obj.blockid--Block ID (ID khối)\n\
		local x,y,z = obj.x,obj.y,obj.z--Block coordinates (Tọa độ khối)\n\
	end\n\
	ScriptSupportEvent:registerEvent([=[Player.ClickBlock]=], ClickBlock)--Click block (Click khối)\n\
snippet Player click creature event (Sự kiện người chơi click vào sinh vật)\n\
	function ClickActor(obj)\n\
		local playerid = obj.eventobjid--Player id who clicked the creature (ID người chơi click sinh vật)\n\
		local actid = obj.toobjid--Instance ID of the clicked creature (ID thực thể sinh vật bị click)\n\
		local x,y,z = obj.x,obj.y,obj.z--Coordinates of clicked creature (Tọa độ sinh vật bị click)\n\
	end\n\
	ScriptSupportEvent:registerEvent([=[Player.ClickActor]=], ClickActor)--Click creature (Click sinh vật)\n\
snippet Key press down event (Sự kiện nhấn phím)\n\
	function InputKeyDown(obj)\n\
		local playerid = obj.eventobjid\n\
		local key = obj.vkey\n\
	end\n\
	ScriptSupportEvent:registerEvent([=[Player.InputKeyDown]=], InputKeyDown)--Key down (Nhấn phím)\n\
snippet Key hold event (Sự kiện giữ phím)\n\
	function InputKeyOnPress(obj)\n\
		local playerid = obj.eventobjid\n\
		local key = obj.vkey\n\
	end\n\
	ScriptSupportEvent:registerEvent([=[Player.InputKeyOnPress]=], InputKeyOnPress)--Key hold (Giữ phím)\n\
snippet Key release event (Sự kiện thả phím)\n\
	function InputKeyUp(obj)\n\
		local playerid = obj.eventobjid\n\
		local key = obj.vkey\n\
	end\n\
	ScriptSupportEvent:registerEvent([=[Player.InputKeyUp]=], InputKeyUp)--Key up (Thả phím)\n\
snippet Input event (Sự kiện nhập liệu)\n\
	function NewInputContent(obj)\n\
		local playerid = obj.eventobjid\n\
		local st = obj.content\n\
	--\n\
	end\n\
	ScriptSupportEvent:registerEvent([=[Player.NewInputContent]=], NewInputContent)\n\
snippet Game start event (Sự kiện bắt đầu game)\n\
	function GameStart()\n\
	end\n\
	ScriptSupportEvent:registerEvent([=[Game.Start]=], GameStart)\n\
snippet Game run event (Sự kiện game đang chạy)\n\
	function GameRun()\n\
	--\n\
	end\n\
	ScriptSupportEvent:registerEvent([=[Game.Run]=], GameRun)\n\
snippet Game end event (Sự kiện kết thúc game)\n\
	function GameEnd()\n\
	--\n\
	end\n\
	ScriptSupportEvent:registerEvent([=[Game.End]=],GameEnd)\n\
snippet Move event (Sự kiện di chuyển)\n\
	function MoveOne()\n\
	--\n\
	end\n\
	ScriptSupportEvent:registerEvent([=[Player.MoveOneBlockSize]=],MoveOne)\n\
snippet Timer usage (Cách dùng Timer)\n\
	local ret,timeid = MiniTimer:createTimer('Timer (Bộ đếm thời gian)')--Create timer (Tạo timer)\n\
	local ret, num, objIds = World:getAllPlayers()--Get player list (Lấy danh sách player)\n\
	MiniTimer:showTimerTips(objIds, timeid, 'Count: (Đếm:)', true)--Show timer (Hiển thị timer)\n\
	MiniTimer:startBackwardTimer(timeid,20,false)--Start countdown (Bắt đầu đếm ngược)\n\
	--MiniTimer:startForwardTimer(timeid)--Start count-up (Bắt đầu đếm xuôi)\n\
	function change(obj)\n\
		local tid = obj.timerid\n\
		local tname = obj.timername\n\
		local result,second=MiniTimer:getTimerTime(tid)\n\
		if second < 1 then --Stop when timer is less than 1 (Dừng khi đếm dưới 1)\n\
			MiniTimer:stopTimer(tid)--Stop timer (Dừng timer)\n\
			MiniTimer:showTimerTips(objIds, timeid, 'Count: (Đếm:)', false)--Hide timer (Ẩn timer)\n\
		end \n\
	end\n\
	ScriptSupportEvent:registerEvent([=[minitimer.change]=],change)--Timer tick (Tick timer)\n\
snippet Draw rectangular box (Vẽ hộp chữ nhật)\n\
	--Set start coordinates (Đặt tọa độ bắt đầu)\n\
	local mapx = 0 \n\
	local mapy = 7 \n\
	local mapz = 0\n\
	--Set scene (Đặt cảnh)\n\
	local mapk = 10 --Width (Chiều rộng)\n\
	local mapl = 30 --Length (Chiều dài)\n\
	local maph = 8  --Height (Chiều cao)\n\
	local woodblock = 1120 --Block type to use (Loại khối dùng)\n\
	for L = mapx , mapx + mapk do \n\
	--Draw floor (or ceiling same way) (Vẽ sàn hoặc trần)\n\
		for H = mapz, mapz + mapl do \n\
			Block:replaceBlock(woodblock, L, mapy-1, H, 0) \n\
		end \n\
	end \n\
	for i = mapx , mapx + mapk do\n\
	--Two wall sides (Hai mặt tường)\n\
		for h = mapy, mapy + maph do \n\
			Block:replaceBlock(woodblock, i, h, mapz-1, 0) \n\
			Block:replaceBlock(woodblock, i, h , mapz +mapl+1   , 0) \n\
		end\n\
	end\n\
	for j = mapz , mapz + mapl do\n\
	--Two wall sides (Hai mặt tường)\n\
		for h = mapy, mapy + maph do \n\
			Block:replaceBlock(woodblock, mapx -1, h,  j  , 0) \n\
			Block:replaceBlock(woodblock, mapx + mapk +1, h, j , 0) \n\
		end\n\
	end	\n\
snippet Play music / sound effect (Phát nhạc / hiệu ứng âm thanh)\n\
	--Pitch list muisc[1] high, muisc[2] mid, muisc[3] low (Danh sách cao độ: cao, trung, thấp)\n\
	local muisc = { \n\
	{2.00, 2.12 ,2.24, 2.38, 2.52, 2.67, 2.83, 3.00, 3.17, 3.36, 3.56, 3.78},\n\
	{1.00, 1.06, 1.12, 1.19, 1.26, 1.33, 1.41, 1.50, 1.59, 1.68, 1.78, 1.89},\n\
	{0.50, 0.53, 0.56, 0.59, 0.63, 0.67, 0.71, 0.75, 0.79, 0.84, 0.89, 0.94}} ---\n\
	--10768~10775 electronic, 10776~10783, drum 10784~10792 (Điện tử, trống)\n\
	Player:playMusic(0, 10785, 10 ,muisc[1][1], false) \n\
snippet Weather event (Sự kiện thời tiết)\n\
	ScriptSupportEvent:registerEvent([=[Weather.Changed]=],Changed)--Weather changed (Thời tiết thay đổi)\n\
snippet Container event (Sự kiện container)\n\
	ScriptSupportEvent:registerEvent([=[Backpack.ItemTakeOut]=],ItemTakeOut)--Item taken out of container (Lấy đồ ra khỏi container) blockid, x, y, z, itemid, itemnum\n\
	ScriptSupportEvent:registerEvent([=[Backpack.ItemPutIn]=],ItemPutIn)--Item put into container (Đặt đồ vào container) blockid, x, y, z, itemid, itemnum\n\
	ScriptSupportEvent:registerEvent([=[Backpack.ItemChange]=],ItemChange)--Item changed in container (Đồ thay đổi trong container) blockid, x, y, z, itemid, itemnum\n\
snippet Game events (Sự kiện game)\n\
	ScriptSupportEvent:registerEvent([=[Game.Start]=],Start)--Game start (Bắt đầu game)\n\
	ScriptSupportEvent:registerEvent([=[Game.End]=],End)--Game end (Kết thúc game)\n\
	ScriptSupportEvent:registerEvent([=[Game.Load]=],Load)--Game load (Tải game)\n\
snippet Game time events (Sự kiện thời gian game)\n\
	ScriptSupportEvent:registerEvent([=[Game.Hour]=],Hour)--World time reaches [n] hour (Thế giới đến giờ [n])--hour \n\
	ScriptSupportEvent:registerEvent([=[Game.RunTime]=],RunTime)--World time reaches [n] seconds (Thế giới đến giây [n])--second\n\
	ScriptSupportEvent:registerEvent([=[Game.TimeOver]=],TimeOver)--Game timeout (Hết thời gian game)\n\
snippet Game player events (Sự kiện người chơi game)\n\
	ScriptSupportEvent:registerEvent([=[Game.AnyPlayer.EnterGame]=],EnterGame)--Any player enters game (Bất kỳ người chơi vào game) eventobjid, toobjid \n\
	ScriptSupportEvent:registerEvent([=[Game.AnyPlayer.LeaveGame]=],LeaveGame)--Any player leaves game (Bất kỳ người chơi rời game) eventobjid, toobjid \n\
	ScriptSupportEvent:registerEvent([=[Game.AnyPlayer.Victory]=],Victory)--Any player wins (Bất kỳ người chơi thắng) eventobjid, toobjid \n\
	ScriptSupportEvent:registerEvent([=[Game.AnyPlayer.Defeat]=],Defeat)--Any player loses (Bất kỳ người chơi thua) eventobjid, toobjid \n\
	ScriptSupportEvent:registerEvent([=[Game.AnyPlayer.ReadStage]=],ReadStage)--Any player reads progress (Bất kỳ người chơi đọc tiến độ)\n\
snippet Equipment events (Sự kiện trang bị)\n\
	ScriptSupportEvent:registerEvent([=[Player.EquipChange]=],EquipChange)--Equipment slot changed (Thay đổi ô trang bị)\n\
	ScriptSupportEvent:registerEvent([=[Player.EquipOn]=],EquipOn)--Equipment worn (Mặc trang bị) eventobjid, toobjid, itemid, itemnum\n\
	ScriptSupportEvent:registerEvent([=[Player.EquipOff]=],EquipOff)--Equipment removed (Tháo trang bị) eventobjid, toobjid, itemid, itemnum\n\
snippet Item events (Sự kiện vật phẩm)\n\
	ScriptSupportEvent:registerEvent([=[Player.AddItem]=],AddItem)--New item added (Thêm vật phẩm mới) eventobjid, toobjid, itemid, itemnum \n\
	ScriptSupportEvent:registerEvent([=[Player.ConsumeItem]=],ConsumeItem)--Item consumed (Tiêu thụ vật phẩm) eventobjid, toobjid, itemid, itemnum \n\
	ScriptSupportEvent:registerEvent([=[Player.DiscardItem]=],DiscardItem)--Item discarded (Bỏ vật phẩm) eventobjid, toobjid, itemid, itemnum \n\
	ScriptSupportEvent:registerEvent([=[Item.Disappear]=],Disappear)--Item disappeared (Vật phẩm biến mất) eventobjid, toobjid, itemid, itemnum \n\
	ScriptSupportEvent:registerEvent([=[Item.Pickup]=],Pickup)--Item picked up (Nhặt vật phẩm) eventobjid, toobjid, itemid, itemnum \n\
	ScriptSupportEvent:registerEvent([=[Player.UseItem]=],UseItem)--Player uses item (Người chơi dùng vật phẩm) eventobjid, toobjid, itemid, itemnum \n\
snippet Drop item events (Sự kiện đồ rơi)\n\
	ScriptSupportEvent:registerEvent([=[DropItem.AreaIn]=],AreaIn)--Drop item enters area (Đồ rơi vào khu vực) eventobjid, areaid, itemid(opt), itemnum(opt) \n\
	ScriptSupportEvent:registerEvent([=[DropItem.AreaOut]=],AreaOut)--Drop item leaves area (Đồ rơi ra khỏi khu vực) eventobjid, areaid, itemid(opt), itemnum(opt) \n\
	ScriptSupportEvent:registerEvent([=[Player.PickUpItem]=],PickUpItem)--Pick up drop item (Nhặt đồ rơi) eventobjid, toobjid, itemid, itemnum \n\
snippet Player area events (Sự kiện khu vực người chơi)\n\
	ScriptSupportEvent:registerEvent([=[Player.AreaIn]=],AreaIn)--Player enters area (Người chơi vào khu vực) eventobjid, areaid \n\
	ScriptSupportEvent:registerEvent([=[Player.AreaOut]=],AreaOut)--Player leaves area (Người chơi rời khu vực) eventobjid, areaid \n\
snippet Player combat events (Sự kiện chiến đấu người chơi)\n\
	ScriptSupportEvent:registerEvent([=[Player.Attack]=],Attack)--Player starts attacking (Người chơi bắt đầu tấn công) eventobjid, toobjid \n\
	ScriptSupportEvent:registerEvent([=[Player.AttackHit]=],AttackHit)--Player attack hits (Tấn công trúng) eventobjid, toobjid \n\
	ScriptSupportEvent:registerEvent([=[Player.BeHurt]=],BeHurt)--Player takes damage (Người chơi nhận sát thương) eventobjid, toobjid \n\
	ScriptSupportEvent:registerEvent([=[Player.DamageActor]=],DamageActor)--Deals damage to target (Gây sát thương cho mục tiêu) eventobjid, toobjid \n\
	ScriptSupportEvent:registerEvent([=[Player.DefeatActor]=],DefeatActor)--Defeats target (Đánh bại mục tiêu) eventobjid, toobjid \n\
snippet Chat events (Sự kiện chat)\n\
	ScriptSupportEvent:registerEvent([=[Player.InputContent]=],InputContent)--Chat input UI changed (Giao diện nhập chat thay đổi) eventobjid, content \n\
	ScriptSupportEvent:registerEvent([=[Player.NewInputContent]=],NewInputContent)--Input string (Nhập chuỗi) eventobjid, content \n\
snippet Player slot events (Sự kiện ô người chơi)\n\
	ScriptSupportEvent:registerEvent([=[Player.BackPackChange]=],BackPackChange)--Backpack slot changed (Thay đổi ô balo) eventobjid, toobjid, itemid, itemnum \n\
	ScriptSupportEvent:registerEvent([=[Player.EquipChange]=],EquipChange)--Equipment slot changed (Thay đổi ô trang bị) eventobjid, toobjid, itemid, itemnum \n\
	ScriptSupportEvent:registerEvent([=[Player.SelectShortcut]=],SelectShortcut)--Select shortcut slot (Chọn ô phím tắt) eventobjid, toobjid, itemid, itemnum \n\
	ScriptSupportEvent:registerEvent([=[Player.ShortcutChange]=],ShortcutChange)--Shortcut slot changed (Thay đổi ô phím tắt) eventobjid, toobjid, itemid, itemnum \n\
snippet Player attribute events (Sự kiện thuộc tính người chơi)\n\
	ScriptSupportEvent:registerEvent([=[Player.ChangeAttr]=],ChangeAttr)--Attribute changed (Thuộc tính thay đổi) eventobjid, playerattr \n\
snippet Player team events (Sự kiện đội người chơi)\n\
	ScriptSupportEvent:registerEvent([=[Player.JoinTeam]=],JoinTeam)--Join team (Gia nhập đội) eventobjid, toobjid \n\
snippet Mount events (Sự kiện cưỡi)\n\
	ScriptSupportEvent:registerEvent([=[Player.MountActor]=],MountActor)--Mount creature/vehicle (Cưỡi sinh vật/phương tiện) eventobjid, toobjid \n\
	ScriptSupportEvent:registerEvent([=[Player.DismountActor]=],DismountActor)--Dismount (Xuống khỏi sinh vật) eventobjid, toobjid \n\
snippet Player state events (Sự kiện trạng thái người chơi)\n\
	ScriptSupportEvent:registerEvent([=[Player.Die]=],Die)--Player dies (Người chơi chết) eventobjid, toobjid \n\
	ScriptSupportEvent:registerEvent([=[Player.Revive]=],Revive)--Player revives (Người chơi hồi sinh) eventobjid, toobjid \n\
	ScriptSupportEvent:registerEvent([=[Player.MoveOneBlockSize]=],MoveOneBlockSize)--Move one block (Di chuyển một ô) eventobjid, toobjid \n\
	ScriptSupportEvent:registerEvent([=[Player.MotionStateChange]=],MotionStateChange)--Motion state changed (Trạng thái chuyển động thay đổi) eventobjid, playermotion \n\
	ScriptSupportEvent:registerEvent([=[Player.PlayAction]=],PlayAction)--Action/emote changed (Hành động/biểu cảm thay đổi) eventobjid, act \n\
snippet Creature combat events (Sự kiện chiến đấu sinh vật)\n\
	ScriptSupportEvent:registerEvent([=[Actor.Attack]=],Attack)--Start attacking (Bắt đầu tấn công) eventobjid, toobjid \n\
	ScriptSupportEvent:registerEvent([=[Actor.AttackHit]=],AttackHit)--Attack hits (Tấn công trúng) eventobjid, toobjid \n\
	ScriptSupportEvent:registerEvent([=[Actor.BeHurt]=],BeHurt)--Takes damage (Nhận sát thương) eventobjid, toobjid \n\
	ScriptSupportEvent:registerEvent([=[Actor.Beat]=],Beat)--Creature defeats player/creature (Sinh vật đánh bại người chơi/sinh vật) eventobjid, toobjid \n\
	ScriptSupportEvent:registerEvent([=[Actor.Damage]=],Damage)--Deals damage to target (Gây sát thương cho mục tiêu) eventobjid, toobjid \n\
snippet Creature attribute events (Sự kiện thuộc tính sinh vật)\n\
	ScriptSupportEvent:registerEvent([=[Actor.ChangeAttr]=],ChangeAttr)--Attribute changed (Thuộc tính thay đổi) eventobjid, toobjid \n\
snippet Creature behavior events (Sự kiện hành vi sinh vật)\n\
	ScriptSupportEvent:registerEvent([=[Actor.ChangeMotion]=],ChangeMotion)--Creature behavior state changed (Trạng thái hành vi sinh vật thay đổi) eventobjid, actormotion \n\
snippet Creature collision events (Sự kiện va chạm sinh vật)\n\
	ScriptSupportEvent:registerEvent([=[Actor.Collide]=],Collide)--Collides with other player or creature (Va chạm với người chơi/sinh vật khác) eventobjid, toobjid \n\
snippet Creature events (Sự kiện sinh vật)\n\
	ScriptSupportEvent:registerEvent([=[Actor.Create]=],Create)--Created (Được tạo ra) eventobjid, toobjid \n\
	ScriptSupportEvent:registerEvent([=[Actor.Die]=],Die)--Creature dies (Sinh vật chết) eventobjid, toobjid \n\
snippet Projectile events (Sự kiện đạn/vật phóng)\n\
	ScriptSupportEvent:registerEvent([=[Actor.Projectile.Hit]=],Hit)--Projectile hits creature (Đạn trúng sinh vật) eventobjid, toobjid \n\
	ScriptSupportEvent:registerEvent([=[Missile.AreaIn]=],AreaIn)--Projectile enters area (Đạn vào khu vực) eventobjid, areaid, itemid(opt), itemnum(opt) \n\
	ScriptSupportEvent:registerEvent([=[Missile.AreaOut]=],AreaOut)--Projectile leaves area (Đạn rời khu vực) eventobjid, areaid, itemid(opt), itemnum(opt) \n\
	ScriptSupportEvent:registerEvent([=[Missile.Create]=],Create)--Projectile created (Đạn được tạo) eventobjid, toobjid, itemid, x, y, z \n\
snippet Creature area events (Sự kiện khu vực sinh vật)\n\
	ScriptSupportEvent:registerEvent([=[Actor.AreaIn]=],AreaIn)--Creature enters area (Sinh vật vào khu vực) eventobjid, areaid \n\
	ScriptSupportEvent:registerEvent([=[Actor.AreaOut]=],AreaOut)--Creature leaves area (Sinh vật rời khu vực) eventobjid, areaid \n\
snippet Block events (Sự kiện khối)\n\
	ScriptSupportEvent:registerEvent([=[Block.Add]=],BlockAdd)--Block created (Khối được tạo) blockid, x, y, z \n\
	ScriptSupportEvent:registerEvent([=[Block.DestroyBy]=],DestroyBy)--Block destroyed (Khối bị phá hủy) eventobjid(opt), blockid, x, y, z \n\
snippet Block place event (Sự kiện đặt khối)\n\
	ScriptSupportEvent:registerEvent([=[Block.PlaceBy]=],PlaceBy)--Block placed (Khối được đặt) eventobjid, blockid, x, y, z \n\
snippet Block removed event (Sự kiện khối bị xóa)\n\
	ScriptSupportEvent:registerEvent([=[Block.Remove]=],Remove)--Block removed (Khối bị xóa) blockid, x, y, z \n\
snippet Block trigger event (Sự kiện kích hoạt khối)\n\
	ScriptSupportEvent:registerEvent([=[Block.Trigger]=],Trigger)--Block triggered (Khối bị kích hoạt) eventobjid, blockid, x, y, z \n\
snippet Block dig events (Sự kiện đào khối)\n\
	ScriptSupportEvent:registerEvent([=[Block.Dig.Begin]=],DigBegin)--Block dig begins (Bắt đầu đào khối) eventobjid, blockid, x, y, z\n\
	ScriptSupportEvent:registerEvent([=[Block.Dig.Cancel]=],Cancel)--Block dig cancelled (Hủy đào khối) eventobjid, blockid, x, y, z\n\
	ScriptSupportEvent:registerEvent([=[Block.Dig.End]=],DigEnd)--Block dig completed (Hoàn thành đào khối) eventobjid, blockid, x, y, z\n\
snippet Block fertilize event (Sự kiện bón phân khối)\n\
	ScriptSupportEvent:registerEvent([=[Block.Fertilize]=],Fertilize)--Block fertilized (Khối được bón phân) eventobjid, blockid, x, y, z\n\
snippet Particle effect events (Sự kiện hiệu ứng hạt)\n\
	ScriptSupportEvent:registerEvent([=[Particle.Mob.OnCreate]=],MobOnCreate)--Effect created on any creature (Hiệu ứng tạo trên sinh vật) eventobjid, effectid \n\
	ScriptSupportEvent:registerEvent([=[Particle.Player.OnCreate]=],PlayerOnCreate)--Effect created on any player (Hiệu ứng tạo trên người chơi) eventobjid, effectid \n\
	ScriptSupportEvent:registerEvent([=[Particle.Pos.OnCreate]=],PosOnCreate)--Effect created at any position (Hiệu ứng tạo tại vị trí) x, y, z, effectid \n\
	ScriptSupportEvent:registerEvent([=[Particle.Projectile.OnCreate]=],ProjectileOnCreate)--Effect created on any projectile (Hiệu ứng tạo trên đạn) eventobjid, effectid\n\
snippet Chat print (In ra chat)\n\
	Chat:sendSystemMsg(${1:val}, 0);\n\
snippet Parameter data query - Actions (Truy vấn dữ liệu tham số - Hành động)\n\
	Greeting (Chào hỏi)：1\n\
	Thinking (Cúi đầu suy nghĩ)：2\n\
	Crying (Khóc)：3\n\
	Angry (Tức giận)：4\n\
	Stretching (Duỗi người)：5\n\
	Victory/Happy (Chiến thắng/Vui)：6\n\
	Thankful (Cảm ơn)：7\n\
	Leisure action (Hành động thư giãn)：8\n\
	Fall down (Ngã xuống)：9\n\
	Pose 1：10\n\
	Stand (Đứng)：11\n\
	Run (Chạy)：12\n\
	Lie down sleeping (Nằm ngủ)：13\n\
	Sit down (Ngồi xuống)：14\n\
	Swimming (Bơi)：15\n\
	Attack (Tấn công)：16\n\
	Death (Chết)：17\n\
	Hit reaction (Nhận đòn)：18\n\
	Leisure (Nhàn rỗi)：19\n\
	Jump (Nhảy)：20\n\
snippet Parameter data query - Game modes (Truy vấn dữ liệu tham số - Chế độ game)\n\
	Single player mode (Chế độ đơn)：0 \n\
	Multiplayer creative mode (Sáng tạo nhiều người)：1 \n\
	Extreme mode (Cực hạn)：2 \n\
	Survival converted from creative (Sinh tồn từ sáng tạo)：3 \n\
	Custom gameplay edit mode (Chỉnh sửa gameplay tùy chỉnh)：4 \n\
	Custom gameplay run mode (Chạy gameplay tùy chỉnh)：5 \n\
	Adventure free mode (Phiêu lưu tự do)：6 \n\
	Recording mode (Chế độ ghi)：9 \n\
snippet Parameter data query - Storage slots (Truy vấn dữ liệu tham số - Ô lưu trữ)\n\
	Backpack slot (Ô balo)：0\n\
	Shortcut slot (Ô phím tắt)：1000\n\
	Storage chest (Rương lưu trữ)：3000\n\
	Equipment slot (Ô trang bị)：8000\n\
snippet Add current HP (Thêm HP hiện tại)\n\
	Actor:addHP(eventobjid,10)\n\
snippet Parameter data query - Terrain (Truy vấn dữ liệu tham số - Địa hình)\n\
	Flat terrain (Địa hình phẳng)：0\n\
	Random terrain (Địa hình ngẫu nhiên)：1\n\
snippet Parameter data query - Equipment slots (Truy vấn dữ liệu tham số - Vị trí trang bị)\n\
	Head (Đầu)：0\n\
	Body (Thân)：1\n\
	Legs (Chân)：2\n\
	Feet (Bàn chân)：3\n\
	Special equipment (Trang bị đặc biệt)：4\n\
	Weapon (Vũ khí)：5\n\
snippet Parameter data query - Enchantment attributes (Truy vấn dữ liệu tham số - Thuộc tính phù phép)\n\
	Movement speed (Tốc độ di chuyển)：0\n\
	Swimming speed (Tốc độ bơi)：1\n\
	Upward jump speed (Tốc độ nhảy lên)：2\n\
	Melee attack bonus percentage (% tăng tấn công cận chiến)：3\n\
	Ranged attack bonus percentage (% tăng tấn công tầm xa)：4\n\
	Explosion attack bonus percentage (% tăng tấn công nổ)：5\n\
	Fire attack bonus percentage (% tăng tấn công lửa)：6\n\
	Poison attack bonus percentage (% tăng tấn công độc)：7\n\
	Wither attack bonus percentage (% tăng tấn công tàn lụi)：8\n\
	Attack player bonus percentage (% tăng tấn công người chơi)：9\n\
	Attack undead bonus percentage (% tăng tấn công undead)：10\n\
	Attack animal bonus percentage (% tăng tấn công động vật)：11\n\
	Melee defense bonus percentage (% tăng phòng thủ cận chiến)：12\n\
	Ranged defense bonus percentage (% tăng phòng thủ tầm xa)：13\n\
	Explosion defense bonus percentage (% tăng phòng thủ nổ)：14\n\
	Fire defense bonus percentage (% tăng phòng thủ lửa)：15\n\
	Poison defense bonus percentage (% tăng phòng thủ độc)：16\n\
	Wither defense bonus percentage (% tăng phòng thủ tàn lụi)：17\n\
	Fall damage bonus percentage (% tăng sát thương ngã)：18\n\
	Melee armor points (Điểm giáp cận chiến)：19\n\
	Ranged armor points (Điểm giáp tầm xa)：20\n\
	Explosion armor points (Điểm giáp nổ)：21\n\
	Damage absorption (Hấp thụ sát thương)：22\n\
	Critical hit damage bonus (Tăng sát thương chí mạng)：23\n\
	Increase knockback distance on attack (Tăng khoảng cách bắn văng)：24\n\
	Reduce knockback distance (Giảm khoảng cách bắn văng)：25\n\
	Knockback resistance probability, 0.2 means 20% chance to not be knocked back (Xác suất kháng bắn văng)：26\n\
	Dig speed (Tốc độ đào)：27\n\
	Dig luck, 0.2 means 20% increased drop chance (May mắn đào)：28\n\
	Monster drops (Đồ rơi quái)：29\n\
	Vision brightness 0-1.0 (Độ sáng tầm nhìn)：30\n\
	Character size 0-1.0 (Kích thước nhân vật)：31\n\
	Oxygen supply 1:underwater only, 100:space only, 101:both, 10000:restore oxygen (Cung cấp oxy)：32\n\
snippet Parameter data query - Sounds (Truy vấn dữ liệu tham số - Âm thanh)\n\
	Digging (Đào)：0\n\
	Destroying (Phá hủy)：1\n\
	Placing (Đặt)：2\n\
	Falling (Rơi)：3\n\
	Walking (Đi bộ)：4\n\
snippet Parameter data query - Instance types (Truy vấn dữ liệu tham số - Loại thực thể)\n\
	Player (Người chơi)：1\n\
	Creature (including monsters, animals, NPCs) (Sinh vật gồm quái, động vật, NPC)：2\n\
	Drop item (Đồ rơi)：3\n\
	Projectile (Đạn/vật phóng)：4\n\
snippet Parameter data query - Backpack types (Truy vấn dữ liệu tham số - Loại balo)\n\
	Shortcut bar (Thanh phím tắt)：1\n\
	Storage bar (Thanh lưu trữ)：2\n\
	Equipment bar (Thanh trang bị)：3\n\
snippet Parameter data query - Facing direction (Truy vấn dữ liệu tham số - Hướng mặt)\n\
	--Standard parameter--Numeric parameter--Description (Tham số chuẩn--Số--Mô tả)\n\
	Unspecified (Không xác định)：-1\n\
	Negative X direction (Hướng X âm)：0\n\
	Positive X direction (Hướng X dương)：1\n\
	Negative Z direction (Hướng Z âm)：2\n\
	Positive Z direction (Hướng Z dương)：3\n\
	Negative Y direction (Hướng Y âm)：4\n\
	Positive Y direction (Hướng Y dương)：5\n\
snippet Parameter data query - Creature attributes (Truy vấn dữ liệu tham số - Thuộc tính sinh vật)\n\
	Max HP (HP tối đa)：1\n\
	Current HP (HP hiện tại)：2\n\
	HP recovery (Hồi phục HP)：3\n\
	Max hunger (Độ đói tối đa)：5\n\
	Current hunger (Độ đói hiện tại)：6\n\
	Max oxygen (Oxy tối đa)：7\n\
	Current oxygen (Oxy hiện tại)：8\n\
	Oxygen recovery speed (Tốc độ hồi oxy)：9\n\
	Movement speed (Tốc độ di chuyển)：10\n\
	Run speed (Tốc độ chạy)：11\n\
	Swimming speed (Tốc độ bơi)：13\n\
	Jump power (Lực nhảy)：14\n\
	Weight (Cân nặng)：15\n\
	Dodge rate (Tỷ lệ né)：16\n\
	Melee attack (Tấn công cận chiến)：17\n\
	Ranged attack (Tấn công tầm xa)：18\n\
	Melee defense (Phòng thủ cận chiến)：19\n\
	Ranged defense (Phòng thủ tầm xa)：20\n\
	Model size (Kích thước mô hình)：21\n\
snippet Parameter data query - Creature attribute settings (Truy vấn dữ liệu tham số - Cài đặt thuộc tính sinh vật)\n\
	Can move (Có thể di chuyển)：1\n\
	Can attack (Có thể tấn công)：32\n\
	Can be attacked (Có thể bị tấn công)：64\n\
	Can be killed (Có thể bị giết)：128\n\
	Can pick up items (Có thể nhặt đồ)：256\n\
	Drop on death (Rơi đồ khi chết)：512\n\
snippet Parameter data query - Creature behaviors (Truy vấn dữ liệu tham số - Hành vi sinh vật)\n\
	Idle (Nhàn rỗi)：1\n\
	Standby (Chờ đợi)：2\n\
	Stroll (Lang thang)：3\n\
	Melee attack (Tấn công cận chiến)：4\n\
	Ranged attack (Tấn công tầm xa)：5\n\
	Follow (Theo dõi)：6\n\
	Swimming (Bơi)：7\n\
	Flee (Chạy trốn)：8\n\
	Self-destruct (Tự nổ)：9\n\
	Attracted (Bị thu hút)：10\n\
	Mating (Giao phối)：11\n\
snippet Parameter data query - Player attributes (Truy vấn dữ liệu tham số - Thuộc tính người chơi)\n\
	Max HP (HP tối đa)：1\n\
	Current HP (HP hiện tại)：2\n\
	HP recovery (Hồi phục HP)：3\n\
	Life count (Số mạng)：4\n\
	Max hunger (Độ đói tối đa)：5\n\
	Current hunger (Độ đói hiện tại)：6\n\
	Max oxygen (Oxy tối đa)：7\n\
	Current oxygen (Oxy hiện tại)：8\n\
	Oxygen recovery speed (Tốc độ hồi oxy)：9\n\
	Movement speed (Tốc độ di chuyển)：10\n\
	Run speed (Tốc độ chạy)：11\n\
	Sneak speed (Tốc độ lén)：12\n\
	Swimming speed (Tốc độ bơi)：13\n\
	Jump power (Lực nhảy)：14\n\
	Dodge rate (Tỷ lệ né)：16\n\
	Melee attack (Tấn công cận chiến)：17\n\
	Ranged attack (Tấn công tầm xa)：18\n\
	Melee defense (Phòng thủ cận chiến)：19\n\
	Ranged defense (Phòng thủ tầm xa)：20\n\
	Size (Kích thước)：21\n\
	Score (Điểm số)：22\n\
	Level (Cấp độ)：23\n\
snippet Parameter data query - Player attribute settings (Truy vấn dữ liệu tham số - Cài đặt thuộc tính người chơi)\n\
	Can move (Có thể di chuyển)：1\n\
	Can place blocks (Có thể đặt khối)：2\n\
	Can operate blocks (Có thể thao tác khối)：4\n\
	Can destroy blocks (Có thể phá khối)：8\n\
	Can use items (Có thể dùng đồ)：16\n\
	Can attack (Có thể tấn công)：32\n\
	Can be attacked (Có thể bị tấn công)：64\n\
	Can be killed (Có thể bị giết)：128\n\
	Can pick up items (Có thể nhặt đồ)：256\n\
	Drop on death (Rơi đồ khi chết)：512\n\
	Vehicle auto-forward (Xe tự tiến)：1024\n\
	Can discard items (Có thể bỏ đồ)：2048\n\
snippet Parameter data query - Player item settings (Truy vấn dữ liệu tham số - Cài đặt vật phẩm người chơi)\n\
	Item cannot be discarded (Đồ không thể bỏ)：1\n\
	Item cannot drop on death (Đồ không thể rơi)：2\n\
snippet Parameter data query - Player behaviors (Truy vấn dữ liệu tham số - Hành vi người chơi)\n\
	Still (Đứng yên)：0\n\
	Walking (Đi bộ)：1\n\
	Running (Chạy)：2\n\
	Jumping (Nhảy)：4\n\
	Double jump (Nhảy đôi)：8\n\
	Sneaking (Lén lút)：16\n\
	Landing (Đổ bộ)：32\n\
snippet Parameter data query - Team attributes (Truy vấn dữ liệu tham số - Thuộc tính đội)\n\
	Player count (Số người chơi)：1\n\
	Score (Điểm số)：2\n\
snippet Parameter data query - Damage types (Truy vấn dữ liệu tham số - Loại sát thương)\n\
	Melee damage (Cận chiến)：0：HURTTYPE.MELEE\n\
	Ranged damage (Tầm xa)：1：HURTTYPE.REMOTE\n\
	Explosion damage (Nổ)：2：HURTTYPE.BOMB\n\
	Physical damage (Vật lý)：3：HURTTYPE.PHYSICS\n\
	Burn damage (Cháy)：3：HURTTYPE.BURNING\n\
	Poison damage (Độc)：4：HURTTYPE.TOXIN\n\
	Wither damage (Tàn lụi)：5：HURTTYPE.WITHER\n\
	Elemental damage (Nguyên tố)：6：HURTTYPE.MAGIC\n\
	Sun damage (Ánh nắng)：6：HURTTYPE.SUN\n\
	Fall damage (Ngã)：7：HURTTYPE.FALL\n\
	Crushed damage (Bị đè)：8：HURTTYPE.ANVIL\n\
	Cactus damage (Xương rồng)：9：HURTTYPE.CACTUS\n\
	Suffocation damage (Ngạt thở)：10：HURTTYPE.ASPHYXIA\n\
	Drowning damage (Chết đuối)：11：HURTTYPE.DROWN\n\
	Underwater creature suffocation in air (Sinh vật dưới nước ngạt trên cạn)：12：HURTTYPE.SUFFOCATE\n\
	Reflect damage (Phản sát thương)：13：HURTTYPE.ANTIINJURY\n\
	Laser damage (Tia laser)：14：HURTTYPE.LASER\n\
snippet Parameter data query - Block attributes (Truy vấn dữ liệu tham số - Thuộc tính khối)\n\
	Explosion resistance (Kháng nổ)：1\n\
	Hardness (Độ cứng)：2\n\
	Slide inertia (Quán tính trượt)：3\n\
	Burn speed (Tốc độ cháy)：4\n\
	Burn probability (Xác suất cháy)：5\n\
	Brightness (Độ sáng)：6\n\
snippet Parameter data query - Block attribute settings (Truy vấn dữ liệu tham số - Cài đặt thuộc tính khối)\n\
	Destructible (Có thể phá)：1\n\
	Operable (Có thể thao tác)：2\n\
	Can be pushed (Có thể đẩy)：4\n\
	Can drop items (Có thể rơi đồ)：8\n\
	Drop when pushed (Rơi khi bị đẩy)：16\n\
snippet Parameter data query - Block status (Truy vấn dữ liệu tham số - Trạng thái khối)\n\
	Active (activated) (Hoạt động/kích hoạt)：1\n\
	Inactive (not activated) (Không hoạt động)：2\n\
snippet Parameter data query - Weather status (Truy vấn dữ liệu tham số - Trạng thái thời tiết)\n\
	Alternating sun/rain (Nắng/mưa xen kẽ)：0\n\
	Sunny (Nắng)：1\n\
	Rainy (Mưa)：2\n\
snippet Parameter data query - View direction (Truy vấn dữ liệu tham số - Hướng góc nhìn)\n\
	First person view (Góc nhìn thứ nhất)：0\n\
	Back view (Góc nhìn sau)：1\n\
	Front view (Góc nhìn trước)：2\n\
	Top-down view (Góc nhìn từ trên)：3\n\
	Custom view (Góc nhìn tùy chỉnh)：4\n\
snippet Parameter data query - Template library types (Truy vấn dữ liệu tham số - Loại thư viện mẫu)\n\
	None (Không)：0\n\
	Block (Khối)：1\n\
	Item (Vật phẩm)：2\n\
	Creature (Sinh vật)：3\n\
	Effect (Hiệu ứng)：4\n\
	Sound (Âm thanh)：5\n\
snippet Parameter data query - Variable library types (Truy vấn dữ liệu tham số - Loại thư viện biến)\n\
	Position (Vị trí)：1\n\
	Area (Khu vực)：2\n\
	Numeric (Số)：3\n\
	String (Chuỗi)：4\n\
	Boolean (Logic)：5\n\
	Player (Người chơi)：6\n\
	Player group (Nhóm người chơi)：7\n\
	Block type (Loại khối)：8\n\
	Item type (Loại vật phẩm)：9\n\
	Creature (Sinh vật)：10\n\
	Actor type (Loại actor)：11\n\
	Creature group (Nhóm sinh vật)：12\n\
	Timer (Bộ đếm thời gian)：13\n\
	Effect type (Loại hiệu ứng)：14\n\
snippet Parameter data query - Block facing direction (Truy vấn dữ liệu tham số - Hướng mặt khối)\n\
	East (Đông)：FACE_DIRECTION.DIR_POS_X\n\
	South (Nam)：FACE_DIRECTION.DIR_NEG_Z\n\
	West (Tây)：FACE_DIRECTION.DIR_NEG_X\n\
	North (Bắc)：FACE_DIRECTION.DIR_POS_Z\n\
	Up (Trên)：FACE_DIRECTION.DIR_POS_Y\n\
	Down (Dưới)：FACE_DIRECTION.DIR_NEG_Y\n\
snippet Parameter data query - Team IDs (Truy vấn dữ liệu tham số - ID đội)\n\
	Team 1 - Red (Đội 1 - Đỏ)：1\n\
	Team 2 - Blue (Đội 2 - Xanh lam)：2\n\
	Team 3 - Green (Đội 3 - Xanh lá)：3\n\
	Team 4 - Yellow (Đội 4 - Vàng)：4\n\
	Team 5 - Orange (Đội 5 - Cam)：5\n\
	Team 6 - Purple (Đội 6 - Tím)：6\n\
snippet GameRule - Set time (GameRule - Đặt thời gian)\n\
	GameRule.CurTime = 1 --Set time, configure before Game.Start (Đặt thời gian, thiết lập trước Game.Start)\n\
snippet GameRule - Lock time (GameRule - Khóa thời gian)\n\
	GameRule.TimeLocked = 0 --Lock time 0=no 1=yes, configure before Game.Start (Khóa thời gian 0=không 1=có)\n\
snippet GameRule - Set weather (GameRule - Đặt thời tiết)\n\
	GameRule.Weather = 0 --Set 0=sunny 1=rainy, configure before Game.Start (Đặt 0=nắng 1=mưa)\n\
snippet GameRule - Max players (GameRule - Số người chơi tối đa)\n\
	GameRule.MaxPlayers = 10 --Max player count, configure before Game.Start (Số người chơi tối đa)\n\
snippet GameRule - Block destroy (GameRule - Có thể phá khối)\n\
	GameRule.BlockDestroy = 0 --Can destroy blocks 0=no 1=yes, configure before Game.Start (Có thể phá khối 0=không 1=có)\n\
snippet GameRule - Block place (GameRule - Có thể đặt khối)\n\
	GameRule.BlockPlace = 0 --Can place blocks 0=no 1=yes, configure before Game.Start (Có thể đặt khối 0=không 1=có)\n\
snippet GameRule - Block use (GameRule - Có thể dùng khối)\n\
	GameRule.BlockUse = 0 --Can use blocks 0=no 1=yes, configure before Game.Start (Có thể dùng khối 0=không 1=có)\n\
snippet GameRule - Gravity factor (GameRule - Hệ số trọng lực)\n\
	GameRule.GravityFactor = 0 --Gravity factor (range 0.1~10), configure before Game.Start (Hệ số trọng lực 0.1~10)\n\
snippet GameRule - Camera mode (GameRule - Chế độ camera)\n\
	GameRule.CameraDir = 0 --Camera view mode: 0/1/2=default first/front/back, 3/4/5/6=locked first/front/back/top, configure before Game.Start (Chế độ camera)\n\
snippet GameRule - Start mode (GameRule - Chế độ khởi động)\n\
	GameRule.StartMode = 0 --Start mode: 0=host/1=auto, configure before Game.Start (Chế độ khởi động: 0=chủ/1=tự động)\n\
snippet GameRule - Start player count (GameRule - Số người cần để bắt đầu)\n\
	GameRule.StartPlayers = 1 --Number of players needed to start, configure before Game.Start (Số người cần để bắt đầu)\n\
snippet GameRule - Team count (GameRule - Số đội)\n\
	GameRule.TeamNum = 1 --Number of game teams, configure before Game.Start (Số đội trong game)\n\
snippet GameRule - Disable attack (GameRule - Cấm tấn công)\n\
	GameRule.AttackPlayerMode = 1 --Disable attack: 1=player/2=teammate, configure before Game.Start (Cấm tấn công: 1=người chơi/2=đồng đội)\n\
snippet GameRule - Game duration (GameRule - Thời gian game)\n\
	GameRule.EndTime = 10 --Game duration setting, configure before Game.Start (Thời gian game)\n\
snippet GameRule - Victory score (GameRule - Điểm thắng)\n\
	GameRule.EndScore = 10 --Victory score setting, configure before Game.Start (Điểm thắng)\n\
snippet GameRule - Score for killing player (GameRule - Điểm khi giết người chơi)\n\
	GameRule.ScoreKillPlayer = 1 --Score for defeating a player, configure before Game.Start (Điểm khi đánh bại người chơi)\n\
snippet GameRule - Score for killing monster (GameRule - Điểm khi giết quái)\n\
	GameRule.ScoreKillMob = 1 --Score for defeating a monster, configure before Game.Start (Điểm khi đánh bại quái)\n\
snippet GameRule - Star score (GameRule - Điểm sao)\n\
	GameRule.ScoreCollectStar = 1 --Score for collecting stars (flashing star block), configure before Game.Start (Điểm thu thập sao)\n\
snippet GameRule - Revive mode (GameRule - Chế độ hồi sinh)\n\
	GameRule.ReviveMode = 1 --Revive mode in seconds, 0=custom click, configure before Game.Start (Chế độ hồi sinh tính bằng giây, 0=tự bấm)\n\
snippet GameRule - Revive invulnerability (GameRule - Thời gian bất tử sau hồi sinh)\n\
	GameRule.ReviveInvulnerable = 1 --Revive invulnerable buff in seconds, 0=default (5s), configure before Game.Start (Buff bất tử sau hồi sinh)\n\
snippet GameRule - Name display (GameRule - Hiển thị tên)\n\
	GameRule.DisplayName = 1 --Name display: 0=default 1=allies only 2=enemies only 3=hidden, configure before Game.Start (Hiển thị tên)\n\
snippet GameRule - Timeout rule (GameRule - Quy tắc hết giờ)\n\
	GameRule.WinLoseEndTime = 1 --Timeout win/lose: 0=by score 1=all win (green) 2=all lose (red), configure before Game.Start (Quy tắc hết giờ)\n\
snippet GameRule - Kill notification (GameRule - Thông báo tiêu diệt)\n\
	GameRule.KillNotify = 1 --Kill notification by player: 1=true 0=false (system chat notification), configure before Game.Start (Thông báo tiêu diệt)\n\
snippet GameRule - Background music (GameRule - Nhạc nền)\n\
	GameRule.BgMusicMode = 1 --Background music mode: 0=off, 1-8=different music, configure before Game.Start (Chế độ nhạc nền)\n\
snippet GameRule - Monster spawning (GameRule - Quái vật xuất hiện)\n\
	GameRule.MobGen = 1 --Monster spawn: -1=follow created options, 0=no spawn, 1=spawn, configure before Game.Start (Spawn quái: -1=theo tùy chọn, 0=không, 1=có)\n\
snippet GameRule - Spawn point selection (GameRule - Chọn điểm hồi sinh)\n\
	GameRule.SpawnPtMode = 1 --Spawn point: 0=random point 1=nearest point, configure before Game.Start (Điểm hồi sinh: 0=ngẫu nhiên 1=gần nhất)\n\
snippet GameRule - Minimap display (GameRule - Hiển thị minimap)\n\
	GameRule.MinimapTeams = 1 --Minimap: 0=all visible 1=different teams invisible, configure before Game.Start (Minimap: 0=tất cả thấy 1=đội khác không thấy)\n\
snippet GameRule - Drop setting (GameRule - Cài đặt rơi đồ)\n\
	GameRule.PlayerDieDrops = 0 --Player death drops: 0=drop in place 3=drop to storage box other=no drop, configure before Game.Start (Rơi đồ khi chết)\n\
snippet GameRule - Display score and time (GameRule - Hiển thị điểm và thời gian)\n\
	GameRule.DisplayScore = 1 --Display score and time: 1=true 0=false, configure before Game.Start (Hiển thị điểm và thời gian)\n\
snippet GameRule - Life setting (GameRule - Cài đặt mạng sống)\n\
	GameRule.LifeNum = 1 --Game lives, game ends in failure when death count reaches this, configure before Game.Start (Số mạng sống)\n\
snippet GameRule - Show crosshair (GameRule - Hiển thị tâm ngắm)\n\
	GameRule.ShowSight = 1 --Show crosshair: 1=show 2=hide, configure before Game.Start (Hiển thị tâm ngắm: 1=hiện 2=ẩn)\n\
snippet GameRule - Mid-game join (GameRule - Tham gia giữa chừng)\n\
	GameRule.AllowMidwayJoin = 1 --Mid-game join: 0=not allowed 1=allowed, configure before Game.Start (Tham gia giữa chừng: 0=không 1=có)\n\
snippet GameRule - Spectate setting (GameRule - Cài đặt xem)\n\
	GameRule.ViewMode = 1 --Spectate after defeat: 0=off 1=on, configure before Game.Start (Xem sau khi thua: 0=tắt 1=bật)\n\
snippet GameRule - Spectate type (GameRule - Loại xem)\n\
	GameRule.ViewType = 1 --Spectate type: 0=free spectate 1=follow screen 2=switchable, configure before Game.Start (Loại xem: 0=tự do 1=theo màn hình 2=chuyển đổi)\n\
snippet GameRule - Round setting (GameRule - Cài đặt vòng)\n\
	GameRule.ScoreResetRound = 1 --Score reset round (like football restart after goal): 1=true, configure before Game.Start (Vòng reset điểm như bóng đá)\n\
snippet GameRule - Color change score (GameRule - Điểm đổi màu)\n\
	GameRule.ScoreColorChange = 1 --Custom score, points earned each time it turns red, configure before Game.Start (Điểm tùy chỉnh khi chuyển đỏ)\n\
";  
	return snippet;
}

//获取本地设置的Completer
function GetServiceFuncs() {
	var jsonObj = [
		{"name":"Actor.addBuff", "caption":"Actor:addBuff", "value":"Actor:addBuff(objid, buffid, bufflv, customticks)", "meta":"Actor", "type":"local", "score":9},
		{"name":"Actor.addEnchant", "caption":"Actor:addEnchant", "value":"Actor:addEnchant(objid, slot, enchantId, enchantLevel)", "meta":"Actor", "type":"local", "score":9},
		{"name":"Actor.addHP", "caption":"Actor:addHP", "value":"Actor:addHP(objid, hp)", "meta":"Actor", "type":"local", "score":9},
		{"name":"Actor.addOxygen", "caption":"Actor:addOxygen", "value":"Actor:addOxygen(objid, oxygen)", "meta":"Actor", "type":"local", "score":9},
		{"name":"Actor.appendSpeed", "caption":"Actor:appendSpeed", "value":"Actor:appendSpeed(objid, x, y, z)", "meta":"Actor", "type":"local", "score":9},
		{"name":"Actor.calcDirectionByAngle", "caption":"Actor:calcDirectionByAngle", "value":"Actor:calcDirectionByAngle(objid, yaw, pitch)", "meta":"Actor", "type":"local", "score":9},
		{"name":"Actor.calcDirectionByDirection", "caption":"Actor:calcDirectionByDirection", "value":"Actor:calcDirectionByDirection(objid, vx, vy, vz)", "meta":"Actor", "type":"local", "score":9},
		{"name":"Actor.calcDirectionByYawAngle", "caption":"Actor:calcDirectionByYawAngle", "value":"Actor:calcDirectionByYawAngle(objid, yaw, pitch)", "meta":"Actor", "type":"local", "score":9},
		{"name":"Actor.calcDirectionByYawDirection", "caption":"Actor:calcDirectionByYawDirection", "value":"Actor:calcDirectionByYawDirection(objid, vx, vy, vz)", "meta":"Actor", "type":"local", "score":9},
		{"name":"Actor.clearActorWithId", "caption":"Actor:clearActorWithId", "value":"Actor:clearActorWithId(actorid, bkill)", "meta":"Actor", "type":"local", "score":9},
		{"name":"Actor.clearAllBadBuff", "caption":"Actor:clearAllBadBuff", "value":"Actor:clearAllBadBuff(objid)", "meta":"Actor", "type":"local", "score":9},
		{"name":"Actor.clearAllBuff", "caption":"Actor:clearAllBuff", "value":"Actor:clearAllBuff(objid)", "meta":"Actor", "type":"local", "score":9},
		{"name":"Actor.findNearestBlock", "caption":"Actor:findNearestBlock", "value":"Actor:findNearestBlock(objid, blockid, blockRange)", "meta":"Actor", "type":"local", "score":9},
		{"name":"Actor.getActionAttrState", "caption":"Actor:getActionAttrState", "value":"Actor:getActionAttrState(objid, actionattr)", "meta":"Actor", "type":"local", "score":9},
		{"name":"Actor.getBodySize", "caption":"Actor:getBodySize", "value":"Actor:getBodySize(objid)", "meta":"Actor", "type":"local", "score":9},
		{"name":"Actor.getBuffLeftTick", "caption":"Actor:getBuffLeftTick", "value":"Actor:getBuffLeftTick(objid, buffid)", "meta":"Actor", "type":"local", "score":9},
		{"name":"Actor.getBuffList", "caption":"Actor:getBuffList", "value":"Actor:getBuffList(objid)", "meta":"Actor", "type":"local", "score":9},
		{"name":"Actor.getCurPlaceDir", "caption":"Actor:getCurPlaceDir", "value":"Actor:getCurPlaceDir(objid)", "meta":"Actor", "type":"local", "score":9},
		{"name":"Actor.getEyeHeight", "caption":"Actor:getEyeHeight", "value":"Actor:getEyeHeight(objid)", "meta":"Actor", "type":"local", "score":9},
		{"name":"Actor.getEyePosition", "caption":"Actor:getEyePosition", "value":"Actor:getEyePosition(objid)", "meta":"Actor", "type":"local", "score":9},
		{"name":"Actor.getFaceDirection", "caption":"Actor:getFaceDirection", "value":"Actor:getFaceDirection(objid)", "meta":"Actor", "type":"local", "score":9},
		{"name":"Actor.getFacePitch", "caption":"Actor:getFacePitch", "value":"Actor:getFacePitch(objid)", "meta":"Actor", "type":"local", "score":9},
		{"name":"Actor.getFaceYaw", "caption":"Actor:getFaceYaw", "value":"Actor:getFaceYaw(objid)", "meta":"Actor", "type":"local", "score":9},
		{"name":"Actor.getHP", "caption":"Actor:getHP", "value":"Actor:getHP(objid)", "meta":"Actor", "type":"local", "score":9},
		{"name":"Actor.getMaxHP", "caption":"Actor:getMaxHP", "value":"Actor:getMaxHP(objid)", "meta":"Actor", "type":"local", "score":9},
		{"name":"Actor.getObjType", "caption":"Actor:getObjType", "value":"Actor:getObjType(objid)", "meta":"Actor", "type":"local", "score":9},
		{"name":"Actor.getOxygen", "caption":"Actor:getOxygen", "value":"Actor:getOxygen(objid)", "meta":"Actor", "type":"local", "score":9},
		{"name":"Actor.getPosition", "caption":"Actor:getPosition", "value":"Actor:getPosition(objid)", "meta":"Actor", "type":"local", "score":9},
		{"name":"Actor.getRidingActorObjId", "caption":"Actor:getRidingActorObjId", "value":"Actor:getRidingActorObjId(objid)", "meta":"Actor", "type":"local", "score":9},
		{"name":"Actor.hasBuff", "caption":"Actor:hasBuff", "value":"Actor:hasBuff(objid, buffid)", "meta":"Actor", "type":"local", "score":9},
		{"name":"Actor.isMob", "caption":"Actor:isMob", "value":"Actor:isMob(objid)", "meta":"Actor", "type":"local", "score":9},
		{"name":"Actor.isPlayer", "caption":"Actor:isPlayer", "value":"Actor:isPlayer(objid)", "meta":"Actor", "type":"local", "score":9},
		{"name":"Actor.killSelf", "caption":"Actor:killSelf", "value":"Actor:killSelf(objid)", "meta":"Actor", "type":"local", "score":9},
		{"name":"Actor.mountActor", "caption":"Actor:mountActor", "value":"Actor:mountActor(objid, mountobjid, posindex)", "meta":"Actor", "type":"local", "score":9},
		{"name":"Actor.playAct", "caption":"Actor:playAct", "value":"Actor:playAct(objid, actid)", "meta":"Actor", "type":"local", "score":9},
		{"name":"Actor.playBodyEffect", "caption":"Actor:playBodyEffect", "value":"Actor:playBodyEffect(objid, type)", "meta":"Actor", "type":"local", "score":9},
		{"name":"Actor.playBodyEffectByFile", "caption":"Actor:playBodyEffectByFile", "value":"Actor:playBodyEffectByFile(objid, filename, sync)", "meta":"Actor", "type":"local", "score":9},
		{"name":"Actor.playBodyEffectById", "caption":"Actor:playBodyEffectById", "value":"Actor:playBodyEffectById(objid, particleId, scale)", "meta":"Actor", "type":"local", "score":9},
		{"name":"Actor.playSound", "caption":"Actor:playSound", "value":"Actor:playSound(objid, name, volume, pitch, flag)", "meta":"Actor", "type":"local", "score":9},
		{"name":"Actor.playSoundEffectById", "caption":"Actor:playSoundEffectById", "value":"Actor:playSoundEffectById(objid, soundId, volume, pitch, isLoop)", "meta":"Actor", "type":"local", "score":9},
		{"name":"Actor.playSoundSpecial", "caption":"Actor:playSoundSpecial", "value":"Actor:playSoundSpecial(objid, name, type)", "meta":"Actor", "type":"local", "score":9},
		{"name":"Actor.randomActorID", "caption":"Actor:randomActorID", "value":"Actor:randomActorID(self)", "meta":"Actor", "type":"local", "score":9},
		{"name":"Actor.removeBuff", "caption":"Actor:removeBuff", "value":"Actor:removeBuff(objid, buffid)", "meta":"Actor", "type":"local", "score":9},
		{"name":"Actor.removeEnchant", "caption":"Actor:removeEnchant", "value":"Actor:removeEnchant(objid, slot, enchantId)", "meta":"Actor", "type":"local", "score":9},
		{"name":"Actor.setActionAttrState", "caption":"Actor:setActionAttrState", "value":"Actor:setActionAttrState(objid, actionattr, switch)", "meta":"Actor", "type":"local", "score":9},
		{"name":"Actor.setAttackType", "caption":"Actor:setAttackType", "value":"Actor:setAttackType(objid, attacktype)", "meta":"Actor", "type":"local", "score":9},
		{"name":"Actor.setBodyEffectScale", "caption":"Actor:setBodyEffectScale", "value":"Actor:setBodyEffectScale(objid, particleId, scale)", "meta":"Actor", "type":"local", "score":9},
		{"name":"Actor.setFacePitch", "caption":"Actor:setFacePitch", "value":"Actor:setFacePitch(objid, pitch)", "meta":"Actor", "type":"local", "score":9},
		{"name":"Actor.setFaceYaw", "caption":"Actor:setFaceYaw", "value":"Actor:setFaceYaw(objid, yaw)", "meta":"Actor", "type":"local", "score":9},
		{"name":"Actor.setImmuneType", "caption":"Actor:setImmuneType", "value":"Actor:setImmuneType(objid, immunetype, isadd)", "meta":"Actor", "type":"local", "score":9},
		{"name":"Actor.setPosition", "caption":"Actor:setPosition", "value":"Actor:setPosition(objid, x, y, z)", "meta":"Actor", "type":"local", "score":9},
		{"name":"Actor.stopBodyEffect", "caption":"Actor:stopBodyEffect", "value":"Actor:stopBodyEffect(objid, type)", "meta":"Actor", "type":"local", "score":9},
		{"name":"Actor.stopBodyEffectByFile", "caption":"Actor:stopBodyEffectByFile", "value":"Actor:stopBodyEffectByFile(objid, filename)", "meta":"Actor", "type":"local", "score":9},
		{"name":"Actor.stopBodyEffectById", "caption":"Actor:stopBodyEffectById", "value":"Actor:stopBodyEffectById(objid, particleId)", "meta":"Actor", "type":"local", "score":9},
		{"name":"Actor.stopSoundEffectById", "caption":"Actor:stopSoundEffectById", "value":"Actor:stopSoundEffectById(objid, soundId)", "meta":"Actor", "type":"local", "score":9},
		{"name":"Actor.tryMoveToActor", "caption":"Actor:tryMoveToActor", "value":"Actor:tryMoveToActor(self_objid, target_objid, speed)", "meta":"Actor", "type":"local", "score":9},
		{"name":"Actor.tryMoveToPos", "caption":"Actor:tryMoveToPos", "value":"Actor:tryMoveToPos(objid, x, y, z, speed)", "meta":"Actor", "type":"local", "score":9},
		{"name":"Actor.tryNavigationToPos", "caption":"Actor:tryNavigationToPos", "value":"Actor:tryNavigationToPos(objid, x, y, z, cancontrol)", "meta":"Actor", "type":"local", "score":9},
		{"name":"Actor.turnFacePitch", "caption":"Actor:turnFacePitch", "value":"Actor:turnFacePitch(objid, offset)", "meta":"Actor", "type":"local", "score":9},
		{"name":"Actor.turnFaceYaw", "caption":"Actor:turnFaceYaw", "value":"Actor:turnFaceYaw(objid, offset)", "meta":"Actor", "type":"local", "score":9},
		{"name":"Area.blockInArea", "caption":"Area:blockInArea", "value":"Area:blockInArea(areaid, blockid)", "meta":"Area", "type":"local", "score":9},
		{"name":"Area.blockInAreaRange", "caption":"Area:blockInAreaRange", "value":"Area:blockInAreaRange(blockid, posbeg, posend)", "meta":"Area", "type":"local", "score":9},
		{"name":"Area.clearAllBlock", "caption":"Area:clearAllBlock", "value":"Area:clearAllBlock(areaid, blockid)", "meta":"Area", "type":"local", "score":9},
		{"name":"Area.clearAllBlockAreaRange", "caption":"Area:clearAllBlockAreaRange", "value":"Area:clearAllBlockAreaRange(posbeg, posend, blockid)", "meta":"Area", "type":"local", "score":9},
		{"name":"Area.cloneArea", "caption":"Area:cloneArea", "value":"Area:cloneArea(areaid, deststartpos)", "meta":"Area", "type":"local", "score":9},
		{"name":"Area.cloneAreaRange", "caption":"Area:cloneAreaRange", "value":"Area:cloneAreaRange(posbeg, posend, deststartpos)", "meta":"Area", "type":"local", "score":9},
		{"name":"Area.createAreaRect", "caption":"Area:createAreaRect", "value":"Area:createAreaRect(pos, dim)", "meta":"Area", "type":"local", "score":9},
		{"name":"Area.createAreaRectByRange", "caption":"Area:createAreaRectByRange", "value":"Area:createAreaRectByRange(posBeg, posEnd)", "meta":"Area", "type":"local", "score":9},
		{"name":"Area.destroyArea", "caption":"Area:destroyArea", "value":"Area:destroyArea(areaid)", "meta":"Area", "type":"local", "score":9},
		{"name":"Area.expandArea", "caption":"Area:expandArea", "value":"Area:expandArea(areaid, x, y, z)", "meta":"Area", "type":"local", "score":9},
		{"name":"Area.fillBlock", "caption":"Area:fillBlock", "value":"Area:fillBlock(areaid, blockid, face)", "meta":"Area", "type":"local", "score":9},
		{"name":"Area.fillBlockAreaRange", "caption":"Area:fillBlockAreaRange", "value":"Area:fillBlockAreaRange(posbeg, posend, blockid, face)", "meta":"Area", "type":"local", "score":9},
		{"name":"Area.getAllCreaturesInAreaRange", "caption":"Area:getAllCreaturesInAreaRange", "value":"Area:getAllCreaturesInAreaRange(posbeg, posend)", "meta":"Area", "type":"local", "score":9},
		{"name":"Area.getAllObjsInAreaRange", "caption":"Area:getAllObjsInAreaRange", "value":"Area:getAllObjsInAreaRange(posbeg, posend, objtype)", "meta":"Area", "type":"local", "score":9},
		{"name":"Area.getAllObjsInAreaRangeByObjTypes", "caption":"Area:getAllObjsInAreaRangeByObjTypes", "value":"Area:getAllObjsInAreaRangeByObjTypes(posbeg, posend, objtypes)", "meta":"Area", "type":"local", "score":9},
		{"name":"Area.getAllPlayersInAreaRange", "caption":"Area:getAllPlayersInAreaRange", "value":"Area:getAllPlayersInAreaRange(posbeg, posend)", "meta":"Area", "type":"local", "score":9},
		{"name":"Area.getAreaByPos", "caption":"Area:getAreaByPos", "value":"Area:getAreaByPos(pos)", "meta":"Area", "type":"local", "score":9},
		{"name":"Area.getAreaCenter", "caption":"Area:getAreaCenter", "value":"Area:getAreaCenter(areaid)", "meta":"Area", "type":"local", "score":9},
		{"name":"Area.getAreaCreatures", "caption":"Area:getAreaCreatures", "value":"Area:getAreaCreatures(areaid)", "meta":"Area", "type":"local", "score":9},
		{"name":"Area.getAreaPlayers", "caption":"Area:getAreaPlayers", "value":"Area:getAreaPlayers(areaid)", "meta":"Area", "type":"local", "score":9},
		{"name":"Area.getAreaRectLength", "caption":"Area:getAreaRectLength", "value":"Area:getAreaRectLength(areaid)", "meta":"Area", "type":"local", "score":9},
		{"name":"Area.getAreaRectRange", "caption":"Area:getAreaRectRange", "value":"Area:getAreaRectRange(areaid)", "meta":"Area", "type":"local", "score":9},
		{"name":"Area.getPosOffset", "caption":"Area:getPosOffset", "value":"Area:getPosOffset(srcpos, dim)", "meta":"Area", "type":"local", "score":9},
		{"name":"Area.getRandomPos", "caption":"Area:getRandomPos", "value":"Area:getRandomPos(areaid)", "meta":"Area", "type":"local", "score":9},
		{"name":"Area.objInArea", "caption":"Area:objInArea", "value":"Area:objInArea(areaid, objid)", "meta":"Area", "type":"local", "score":9},
		{"name":"Area.offsetArea", "caption":"Area:offsetArea", "value":"Area:offsetArea(areaid, x, y, z)", "meta":"Area", "type":"local", "score":9},
		{"name":"Area.posInArea", "caption":"Area:posInArea", "value":"Area:posInArea(pos, areaid)", "meta":"Area", "type":"local", "score":9},
		{"name":"Area.replaceAreaBlock", "caption":"Area:replaceAreaBlock", "value":"Area:replaceAreaBlock(areaid, srcblockid, destblockid, face)", "meta":"Area", "type":"local", "score":9},
		{"name":"Area.replaceAreaRangeBlock", "caption":"Area:replaceAreaRangeBlock", "value":"Area:replaceAreaRangeBlock(posbeg, posend, srcblockid, destblockid, face)", "meta":"Area", "type":"local", "score":9},
		{"name":"Backpack.addItem", "caption":"Backpack:addItem", "value":"Backpack:addItem(playerid, itemid, num)", "meta":"Backpack", "type":"local", "score":9},
		{"name":"Backpack.calcSpaceNumForItem", "caption":"Backpack:calcSpaceNumForItem", "value":"Backpack:calcSpaceNumForItem(playerid, itemid)", "meta":"Backpack", "type":"local", "score":9},
		{"name":"Backpack.clearAllPack", "caption":"Backpack:clearAllPack", "value":"Backpack:clearAllPack(playerid)", "meta":"Backpack", "type":"local", "score":9},
		{"name":"Backpack.clearPack", "caption":"Backpack:clearPack", "value":"Backpack:clearPack(playerid, bartype)", "meta":"Backpack", "type":"local", "score":9},
		{"name":"Backpack.discardItem", "caption":"Backpack:discardItem", "value":"Backpack:discardItem(playerid, gridid, num)", "meta":"Backpack", "type":"local", "score":9},
		{"name":"Backpack.enoughSpaceForItem", "caption":"Backpack:enoughSpaceForItem", "value":"Backpack:enoughSpaceForItem(playerid, itemid, num)", "meta":"Backpack", "type":"local", "score":9},
		{"name":"Backpack.getBackpackBarIDRange", "caption":"Backpack:getBackpackBarIDRange", "value":"Backpack:getBackpackBarIDRange(bartype)", "meta":"Backpack", "type":"local", "score":9},
		{"name":"Backpack.getBackpackBarItemList", "caption":"Backpack:getBackpackBarItemList", "value":"Backpack:getBackpackBarItemList(playerid, bartype)", "meta":"Backpack", "type":"local", "score":9},
		{"name":"Backpack.getBackpackBarSize", "caption":"Backpack:getBackpackBarSize", "value":"Backpack:getBackpackBarSize(bartype)", "meta":"Backpack", "type":"local", "score":9},
		{"name":"Backpack.getBackpackBarValidList", "caption":"Backpack:getBackpackBarValidList", "value":"Backpack:getBackpackBarValidList(playerid, bartype)", "meta":"Backpack", "type":"local", "score":9},
		{"name":"Backpack.getGridDurability", "caption":"Backpack:getGridDurability", "value":"Backpack:getGridDurability(playerid, gridid)", "meta":"Backpack", "type":"local", "score":9},
		{"name":"Backpack.getGridEnchantList", "caption":"Backpack:getGridEnchantList", "value":"Backpack:getGridEnchantList(playerid, gridid)", "meta":"Backpack", "type":"local", "score":9},
		{"name":"Backpack.getGridItemID", "caption":"Backpack:getGridItemID", "value":"Backpack:getGridItemID(playerid, gridid)", "meta":"Backpack", "type":"local", "score":9},
		{"name":"Backpack.getGridItemName", "caption":"Backpack:getGridItemName", "value":"Backpack:getGridItemName(playerid, gridid)", "meta":"Backpack", "type":"local", "score":9},
		{"name":"Backpack.getGridNum", "caption":"Backpack:getGridNum", "value":"Backpack:getGridNum(playerid, gridid)", "meta":"Backpack", "type":"local", "score":9},
		{"name":"Backpack.getGridStack", "caption":"Backpack:getGridStack", "value":"Backpack:getGridStack(playerid, gridid)", "meta":"Backpack", "type":"local", "score":9},
		{"name":"Backpack.getGridToolType", "caption":"Backpack:getGridToolType", "value":"Backpack:getGridToolType(playerid, gridid)", "meta":"Backpack", "type":"local", "score":9},
		{"name":"Backpack.getItemNumByBackpackBar", "caption":"Backpack:getItemNumByBackpackBar", "value":"Backpack:getItemNumByBackpackBar(playerid, bartype, itemid)", "meta":"Backpack", "type":"local", "score":9},
		{"name":"Backpack.hasItemByBackpackBar", "caption":"Backpack:hasItemByBackpackBar", "value":"Backpack:hasItemByBackpackBar(playerid, bartype, itemid)", "meta":"Backpack", "type":"local", "score":9},
		{"name":"Backpack.moveGridItem", "caption":"Backpack:moveGridItem", "value":"Backpack:moveGridItem(playerid, gridid, num)", "meta":"Backpack", "type":"local", "score":9},
		{"name":"Backpack.removeGridItem", "caption":"Backpack:removeGridItem", "value":"Backpack:removeGridItem(playerid, gridid, num)", "meta":"Backpack", "type":"local", "score":9},
		{"name":"Backpack.removeGridItemByItemID", "caption":"Backpack:removeGridItemByItemID", "value":"Backpack:removeGridItemByItemID(playerid, itemid, num)", "meta":"Backpack", "type":"local", "score":9},
		{"name":"Backpack.setGridItem", "caption":"Backpack:setGridItem", "value":"Backpack:setGridItem(playerid, gridid, itemid, num, durability)", "meta":"Backpack", "type":"local", "score":9},
		{"name":"Backpack.swapGridItem", "caption":"Backpack:swapGridItem", "value":"Backpack:swapGridItem(playerid, gridsrc, griddst)", "meta":"Backpack", "type":"local", "score":9},
		{"name":"Block.destroyBlock", "caption":"Block:destroyBlock", "value":"Block:destroyBlock(x,y,z,dropitem)", "meta":"Block", "type":"local", "score":9},
		{"name":"Block.getBlockData", "caption":"Block:getBlockData", "value":"Block:getBlockData(x,y,z)", "meta":"Block", "type":"local", "score":9},
		{"name":"Block.getBlockDataByDir", "caption":"Block:getBlockDataByDir", "value":"Block:getBlockDataByDir(blockid, dir)", "meta":"Block", "type":"local", "score":9},
		{"name":"Block.getBlockID", "caption":"Block:getBlockID", "value":"Block:getBlockID(x,y,z)", "meta":"Block", "type":"local", "score":9},
		{"name":"Block.getBlockPowerStatus", "caption":"Block:getBlockPowerStatus", "value":"Block:getBlockPowerStatus(pos)", "meta":"Block", "type":"local", "score":9},
		{"name":"Block.getBlockSettingAttState", "caption":"Block:getBlockSettingAttState", "value":"Block:getBlockSettingAttState(blockid, attrtype)", "meta":"Block", "type":"local", "score":9},
		{"name":"Block.getBlockSwitchStatus", "caption":"Block:getBlockSwitchStatus", "value":"Block:getBlockSwitchStatus(pos)", "meta":"Block", "type":"local", "score":9},
		{"name":"Block.isAirBlock", "caption":"Block:isAirBlock", "value":"Block:isAirBlock(x,y,z)", "meta":"Block", "type":"local", "score":9},
		{"name":"Block.isLiquidBlock", "caption":"Block:isLiquidBlock", "value":"Block:isLiquidBlock(x,y,z)", "meta":"Block", "type":"local", "score":9},
		{"name":"Block.isSolidBlock", "caption":"Block:isSolidBlock", "value":"Block:isSolidBlock(x,y,z)", "meta":"Block", "type":"local", "score":9},
		{"name":"Block.placeBlock", "caption":"Block:placeBlock", "value":"Block:placeBlock(blockid, x, y, z,face)", "meta":"Block", "type":"local", "score":9},
		{"name":"Block.replaceBlock", "caption":"Block:replaceBlock", "value":"Block:replaceBlock(blockid,x,y,z,face)", "meta":"Block", "type":"local", "score":9},
		{"name":"Block.setBlockAll", "caption":"Block:setBlockAll", "value":"Block:setBlockAll(x,y,z,blockid,data)", "meta":"Block", "type":"local", "score":9},
		{"name":"Block.setBlockSettingAttState", "caption":"Block:setBlockSettingAttState", "value":"Block:setBlockSettingAttState(blockid, attrtype, switch)", "meta":"Block", "type":"local", "score":9},
		{"name":"Block.setBlockSwitchStatus", "caption":"Block:setBlockSwitchStatus", "value":"Block:setBlockSwitchStatus(pos, isactive)", "meta":"Block", "type":"local", "score":9},
		{"name":"Chat.sendChat", "caption":"Chat:sendChat", "value":"Chat:sendChat(content, targetuin)", "meta":"Chat", "type":"local", "score":9},
		{"name":"Chat.sendSystemMsg", "caption":"Chat:sendSystemMsg", "value":"Chat:sendSystemMsg(content, targetuin)", "meta":"Chat", "type":"local", "score":9},
		{"name":"Game.addRenderGlobalEffect", "caption":"Game:addRenderGlobalEffect", "value":"Game:addRenderGlobalEffect(path)", "meta":"Game", "type":"local", "score":9},
		{"name":"Game.doGameEnd", "caption":"Game:doGameEnd", "value":"Game:doGameEnd(self)", "meta":"Game", "type":"local", "score":9},
		{"name":"Game.getDefString", "caption":"Game:getDefString", "value":"Game:getDefString(id, ...)", "meta":"Game", "type":"local", "score":9},
		{"name":"Game.getScriptVar", "caption":"Game:getScriptVar", "value":"Game:getScriptVar(index)", "meta":"Game", "type":"local", "score":9},
		{"name":"Game.msgBox", "caption":"Game:msgBox", "value":"Game:msgBox(msg)", "meta":"Game", "type":"local", "score":9},
		{"name":"Game.removeRenderGlobalEffect", "caption":"Game:removeRenderGlobalEffect", "value":"Game:removeRenderGlobalEffect(effectid)", "meta":"Game", "type":"local", "score":9},
		{"name":"Game.sendScriptVars2Client", "caption":"Game:sendScriptVars2Client", "value":"Game:sendScriptVars2Client(self)", "meta":"Game", "type":"local", "score":9},
		{"name":"Game.setRenderGlobalEffectPos", "caption":"Game:setRenderGlobalEffectPos", "value":"Game:setRenderGlobalEffectPos(effectid, x, y, z)", "meta":"Game", "type":"local", "score":9},
		{"name":"Game.setRenderGlobalEffectScale", "caption":"Game:setRenderGlobalEffectScale", "value":"Game:setRenderGlobalEffectScale(effectid, scalex, scaley, scalez)", "meta":"Game", "type":"local", "score":9},
		{"name":"Game.setScriptVar", "caption":"Game:setScriptVar", "value":"Game:setScriptVar(index, val)", "meta":"Game", "type":"local", "score":9},
		{"name":"Item.getItemName", "caption":"Item:getItemName", "value":"Item:getItemName(itemid)", "meta":"Item", "type":"local", "score":9},
		{"name":"MapMark.deleteShape", "caption":"MapMark:deleteShape", "value":"MapMark:deleteShape(shapeid)", "meta":"MapMark", "type":"local", "score":9},
		{"name":"MapMark.newShape", "caption":"MapMark:newShape", "value":"MapMark:newShape(type, isshow, r, g, b)", "meta":"MapMark", "type":"local", "score":9},
		{"name":"MapMark.setShapeColor", "caption":"MapMark:setShapeColor", "value":"MapMark:setShapeColor(shapeid, r, g, b)", "meta":"MapMark", "type":"local", "score":9},
		{"name":"MapMark.showShape", "caption":"MapMark:showShape", "value":"MapMark:showShape(shapeid, showflag)", "meta":"MapMark", "type":"local", "score":9},
		{"name":"MapMark.updateCircle", "caption":"MapMark:updateCircle", "value":"MapMark:updateCircle(shapeid, cx, cz, r)", "meta":"MapMark", "type":"local", "score":9},
		{"name":"MapMark.updateLine", "caption":"MapMark:updateLine", "value":"MapMark:updateLine(shapeid, sx, sz, ex, ez)", "meta":"MapMark", "type":"local", "score":9},
		{"name":"MapMark.updateRectangle", "caption":"MapMark:updateRectangle", "value":"MapMark:updateRectangle(shapeid, sx, sz, w, h)", "meta":"MapMark", "type":"local", "score":9},
		{"name":"MiniTimer.changeTimeInterval", "caption":"MiniTimer:changeTimeInterval", "value":"MiniTimer:changeTimeInterval(id,interval)", "meta":"MiniTimer", "type":"local", "score":9},
		{"name":"MiniTimer.createTimer", "caption":"MiniTimer:createTimer", "value":"MiniTimer:createTimer(name, owid,isprivate)", "meta":"MiniTimer", "type":"local", "score":9},
		{"name":"MiniTimer.deleteTimer", "caption":"MiniTimer:deleteTimer", "value":"MiniTimer:deleteTimer(id)", "meta":"MiniTimer", "type":"local", "score":9},
		{"name":"MiniTimer.getTimerTime", "caption":"MiniTimer:getTimerTime", "value":"MiniTimer:getTimerTime(id)", "meta":"MiniTimer", "type":"local", "score":9},
		{"name":"MiniTimer.isExist", "caption":"MiniTimer:isExist", "value":"MiniTimer:isExist(id)", "meta":"MiniTimer", "type":"local", "score":9},
		{"name":"MiniTimer.pauseTimer", "caption":"MiniTimer:pauseTimer", "value":"MiniTimer:pauseTimer(id)", "meta":"MiniTimer", "type":"local", "score":9},
		{"name":"MiniTimer.resumeTimer", "caption":"MiniTimer:resumeTimer", "value":"MiniTimer:resumeTimer(id)", "meta":"MiniTimer", "type":"local", "score":9},
		{"name":"MiniTimer.showTimerTips", "caption":"MiniTimer:showTimerTips", "value":"MiniTimer:showTimerTips(playerids, timerid, text, show)", "meta":"MiniTimer", "type":"local", "score":9},
		{"name":"MiniTimer.startBackwardTimer", "caption":"MiniTimer:startBackwardTimer", "value":"MiniTimer:startBackwardTimer(id,interval,repeated)", "meta":"MiniTimer", "type":"local", "score":9},
		{"name":"MiniTimer.startForwardTimer", "caption":"MiniTimer:startForwardTimer", "value":"MiniTimer:startForwardTimer(id)", "meta":"MiniTimer", "type":"local", "score":9},
		{"name":"MiniTimer.stopTimer", "caption":"MiniTimer:stopTimer", "value":"MiniTimer:stopTimer(id)", "meta":"MiniTimer", "type":"local", "score":9},
		{"name":"Creature.getActorID", "caption":"Creature:getActorID", "value":"Creature:getActorID(objid)", "meta":"Creature", "type":"local", "score":9},
		{"name":"Creature.getActorName", "caption":"Creature:getActorName", "value":"Creature:getActorName(objid)", "meta":"Creature", "type":"local", "score":9},
		{"name":"Creature.getAtt", "caption":"Creature:getAtt", "value":"Creature:getAtt(objid, attrtype)", "meta":"Creature", "type":"local", "score":9},
		{"name":"Creature.getTamedOwnerID", "caption":"Creature:getTamedOwnerID", "value":"Creature:getTamedOwnerID(objid)", "meta":"Creature", "type":"local", "score":9},
		{"name":"Creature.isAdult", "caption":"Creature:isAdult", "value":"Creature:isAdult(objid)", "meta":"Creature", "type":"local", "score":9},
		{"name":"Creature.setAIActive", "caption":"Creature:setAIActive", "value":"Creature:setAIActive(objid, v)", "meta":"Creature", "type":"local", "score":9},
		{"name":"Creature.setAtt", "caption":"Creature:setAtt", "value":"Creature:setAtt(objid, attrtype, val)", "meta":"Creature", "type":"local", "score":9},
		{"name":"Creature.setOxygenNeed", "caption":"Creature:setOxygenNeed", "value":"Creature:setOxygenNeed(objid, v)", "meta":"Creature", "type":"local", "score":9},
		{"name":"Creature.setPanic", "caption":"Creature:setPanic", "value":"Creature:setPanic(objid, v)", "meta":"Creature", "type":"local", "score":9},
		{"name":"ObjectLib.getAreaData", "caption":"ObjectLib:getAreaData", "value":"ObjectLib:getAreaData(uuid)", "meta":"ObjectLib", "type":"local", "score":9},
		{"name":"ObjectLib.getLivingData", "caption":"ObjectLib:getLivingData", "value":"ObjectLib:getLivingData(uuid)", "meta":"ObjectLib", "type":"local", "score":9},
		{"name":"ObjectLib.getPositionData", "caption":"ObjectLib:getPositionData", "value":"ObjectLib:getPositionData(uuid)", "meta":"ObjectLib", "type":"local", "score":9},
		{"name":"Player.changeViewMode", "caption":"Player:changeViewMode", "value":"Player:changeViewMode(objid, viewmode, islock)", "meta":"Player", "type":"local", "score":9},
		{"name":"Player.checkActionAttrState", "caption":"Player:checkActionAttrState", "value":"Player:checkActionAttrState(objid, actionattr)", "meta":"Player", "type":"local", "score":9},
		{"name":"Player.gainItems", "caption":"Player:gainItems", "value":"Player:gainItems(objid, itemid, num, prioritytype)", "meta":"Player", "type":"local", "score":9},
		{"name":"Player.getAimPos", "caption":"Player:getAimPos", "value":"Player:getAimPos(objid)", "meta":"Player", "type":"local", "score":9},
		{"name":"Player.getAtt", "caption":"Player:getAtt", "value":"Player:getAtt(objid, attrtype)", "meta":"Player", "type":"local", "score":9},
		{"name":"Player.getCurShotcut", "caption":"Player:getCurShotcut", "value":"Player:getCurShotcut(objid)", "meta":"Player", "type":"local", "score":9},
		{"name":"Player.getCurToolID", "caption":"Player:getCurToolID", "value":"Player:getCurToolID(objid)", "meta":"Player", "type":"local", "score":9},
		{"name":"Player.getDieTimes", "caption":"Player:getDieTimes", "value":"Player:getDieTimes(objid)", "meta":"Player", "type":"local", "score":9},
		{"name":"Player.getFoodLevel", "caption":"Player:getFoodLevel", "value":"Player:getFoodLevel(objid)", "meta":"Player", "type":"local", "score":9},
		{"name":"Player.getGameRanking", "caption":"Player:getGameRanking", "value":"Player:getGameRanking(objid)", "meta":"Player", "type":"local", "score":9},
		{"name":"Player.getGameResults", "caption":"Player:getGameResults", "value":"Player:getGameResults(objid)", "meta":"Player", "type":"local", "score":9},
		{"name":"Player.getGameScore", "caption":"Player:getGameScore", "value":"Player:getGameScore(objid)", "meta":"Player", "type":"local", "score":9},
		{"name":"Player.getHostUin", "caption":"Player:getHostUin", "value":"Player:getHostUin(self)", "meta":"Player", "type":"local", "score":9},
		{"name":"Player.getLeftLifeNum", "caption":"Player:getLeftLifeNum", "value":"Player:getLeftLifeNum(objid)", "meta":"Player", "type":"local", "score":9},
		{"name":"Player.getMainPlayerUin", "caption":"Player:getMainPlayerUin", "value":"Player:getMainPlayerUin(self)", "meta":"Player", "type":"local", "score":9},
		{"name":"Player.getNickname", "caption":"Player:getNickname", "value":"Player:getNickname(objid)", "meta":"Player", "type":"local", "score":9},
		{"name":"Player.getTeam", "caption":"Player:getTeam", "value":"Player:getTeam(objid)", "meta":"Player", "type":"local", "score":9},
		{"name":"Player.isMainPlayer", "caption":"Player:isMainPlayer", "value":"Player:isMainPlayer(objid)", "meta":"Player", "type":"local", "score":9},
		{"name":"Player.mountActor", "caption":"Player:mountActor", "value":"Player:mountActor(playerid, objid, posindex)", "meta":"Player", "type":"local", "score":9},
		{"name":"Player.notifyGameInfo2Self", "caption":"Player:notifyGameInfo2Self", "value":"Player:notifyGameInfo2Self(objid, info)", "meta":"Player", "type":"local", "score":9},
		{"name":"Player.onCurToolUsed", "caption":"Player:onCurToolUsed", "value":"Player:onCurToolUsed(objid, num)", "meta":"Player", "type":"local", "score":9},
		{"name":"Player.openDevStore", "caption":"Player:openDevStore", "value":"Player:openDevStore(objid)", "meta":"Player", "type":"local", "score":9},
		{"name":"Player.playAct", "caption":"Player:playAct", "value":"Player:playAct(objid, actid)", "meta":"Player", "type":"local", "score":9},
		{"name":"Player.playAdvertising", "caption":"Player:playAdvertising", "value":"Player:playAdvertising(objid, adname, eventname, eventparams)", "meta":"Player", "type":"local", "score":9},
		{"name":"Player.playMusic", "caption":"Player:playMusic", "value":"Player:playMusic(objid, musicId, volume, pitch, isLoop)", "meta":"Player", "type":"local", "score":9},
		{"name":"Player.removeBackpackItem", "caption":"Player:removeBackpackItem", "value":"Player:removeBackpackItem(objid, itemid, num)", "meta":"Player", "type":"local", "score":9},
		{"name":"Player.reviveToPos", "caption":"Player:reviveToPos", "value":"Player:reviveToPos(objid, x, y, z)", "meta":"Player", "type":"local", "score":9},
		{"name":"Player.rotateCamera", "caption":"Player:rotateCamera", "value":"Player:rotateCamera(objid, yaw, pitch)", "meta":"Player", "type":"local", "score":9},
		{"name":"Player.setActionAttrState", "caption":"Player:setActionAttrState", "value":"Player:setActionAttrState(objid, actionattr, switch)", "meta":"Player", "type":"local", "score":9},
		{"name":"Player.setAtt", "caption":"Player:setAtt", "value":"Player:setAtt(objid, attrtype, val)", "meta":"Player", "type":"local", "score":9},
		{"name":"Player.setFoodLevel", "caption":"Player:setFoodLevel", "value":"Player:setFoodLevel(objid, foodLevel)", "meta":"Player", "type":"local", "score":9},
		{"name":"Player.setGameRanking", "caption":"Player:setGameRanking", "value":"Player:setGameRanking(objid, rank)", "meta":"Player", "type":"local", "score":9},
		{"name":"Player.setGameResults", "caption":"Player:setGameResults", "value":"Player:setGameResults(objid, result)", "meta":"Player", "type":"local", "score":9},
		{"name":"Player.setGameScore", "caption":"Player:setGameScore", "value":"Player:setGameScore(objid, score)", "meta":"Player", "type":"local", "score":9},
		{"name":"Player.setGameWin", "caption":"Player:setGameWin", "value":"Player:setGameWin(objid)", "meta":"Player", "type":"local", "score":9},
		{"name":"Player.setItemAttAction", "caption":"Player:setItemAttAction", "value":"Player:setItemAttAction(objid, itemid, attrtype, switch)", "meta":"Player", "type":"local", "score":9},
		{"name":"Player.setPosition", "caption":"Player:setPosition", "value":"Player:setPosition(objid, x, y, z)", "meta":"Player", "type":"local", "score":9},
		{"name":"Player.setRevivePoint", "caption":"Player:setRevivePoint", "value":"Player:setRevivePoint(objid, x, y, z)", "meta":"Player", "type":"local", "score":9},
		{"name":"Player.setSkillCD", "caption":"Player:setSkillCD", "value":"Player:setSkillCD(objid, itemid, cd)", "meta":"Player", "type":"local", "score":9},
		{"name":"Player.setTeam", "caption":"Player:setTeam", "value":"Player:setTeam(objid, teamid)", "meta":"Player", "type":"local", "score":9},
		{"name":"Player.stopMusic", "caption":"Player:stopMusic", "value":"Player:stopMusic(objid)", "meta":"Player", "type":"local", "score":9},
		{"name":"Player.teleportHome", "caption":"Player:teleportHome", "value":"Player:teleportHome(objid)", "meta":"Player", "type":"local", "score":9},
		{"name":"Player.useItem", "caption":"Player:useItem", "value":"Player:useItem(objid, itemid, status, onshift)", "meta":"Player", "type":"local", "score":9},
		{"name":"Spawnport.getChunkValidSpawnPos", "caption":"Spawnport:getChunkValidSpawnPos", "value":"Spawnport:getChunkValidSpawnPos(x, y, z)", "meta":"Spawnport", "type":"local", "score":9},
		{"name":"Spawnport.getSpawnPoint", "caption":"Spawnport:getSpawnPoint", "value":"Spawnport:getSpawnPoint(self)", "meta":"Spawnport", "type":"local", "score":9},
		{"name":"Team.addTeamDieTimes", "caption":"Team:addTeamDieTimes", "value":"Team:addTeamDieTimes(teamid)", "meta":"Team", "type":"local", "score":9},
		{"name":"Team.addTeamScore", "caption":"Team:addTeamScore", "value":"Team:addTeamScore(teamid, score)", "meta":"Team", "type":"local", "score":9},
		{"name":"Team.changePlayerTeam", "caption":"Team:changePlayerTeam", "value":"Team:changePlayerTeam(playerid, teamid)", "meta":"Team", "type":"local", "score":9},
		{"name":"Team.getNumTeam", "caption":"Team:getNumTeam", "value":"Team:getNumTeam(self)", "meta":"Team", "type":"local", "score":9},
		{"name":"Team.getTeamCreatures", "caption":"Team:getTeamCreatures", "value":"Team:getTeamCreatures(teamid)", "meta":"Team", "type":"local", "score":9},
		{"name":"Team.getTeamDieTimes", "caption":"Team:getTeamDieTimes", "value":"Team:getTeamDieTimes(teamid)", "meta":"Team", "type":"local", "score":9},
		{"name":"Team.getTeamPlayerNum", "caption":"Team:getTeamPlayerNum", "value":"Team:getTeamPlayerNum(teamid, alive)", "meta":"Team", "type":"local", "score":9},
		{"name":"Team.getTeamPlayers", "caption":"Team:getTeamPlayers", "value":"Team:getTeamPlayers(teamid, alive)", "meta":"Team", "type":"local", "score":9},
		{"name":"Team.getTeamResults", "caption":"Team:getTeamResults", "value":"Team:getTeamResults(teamid)", "meta":"Team", "type":"local", "score":9},
		{"name":"Team.getTeamScore", "caption":"Team:getTeamScore", "value":"Team:getTeamScore(teamid)", "meta":"Team", "type":"local", "score":9},
		{"name":"Team.randomTeamPlayer", "caption":"Team:randomTeamPlayer", "value":"Team:randomTeamPlayer(teamid, alive)", "meta":"Team", "type":"local", "score":9},
		{"name":"Team.setTeamDieTimes", "caption":"Team:setTeamDieTimes", "value":"Team:setTeamDieTimes(teamid, times)", "meta":"Team", "type":"local", "score":9},
		{"name":"Team.setTeamPlayersResults", "caption":"Team:setTeamPlayersResults", "value":"Team:setTeamPlayersResults(teamid, result)", "meta":"Team", "type":"local", "score":9},
		{"name":"Team.setTeamResults", "caption":"Team:setTeamResults", "value":"Team:setTeamResults(teamid,result)", "meta":"Team", "type":"local", "score":9},
		{"name":"Team.setTeamScore", "caption":"Team:setTeamScore", "value":"Team:setTeamScore(teamid, score)", "meta":"Team", "type":"local", "score":9},
		{"name":"UI.ShowScreenEffect", "caption":"UI:ShowScreenEffect", "value":"UI:ShowScreenEffect(type, isloop, incspeed)", "meta":"UI", "type":"local", "score":9},
		{"name":"UI.hide", "caption":"UI:hide", "value":"UI:hide(name)", "meta":"UI", "type":"local", "score":9},
		{"name":"UI.list", "caption":"UI:list", "value":"UI:list(opt)", "meta":"UI", "type":"local", "score":9},
		{"name":"UI.load", "caption":"UI:load", "value":"UI:load(path)", "meta":"UI", "type":"local", "score":9},
		{"name":"UI.makedummy", "caption":"UI:makedummy", "value":"UI:makedummy(name)", "meta":"UI", "type":"local", "score":9},
		{"name":"UI.setGBattleUI", "caption":"UI:setGBattleUI", "value":"UI:setGBattleUI(name, value)", "meta":"UI", "type":"local", "score":9},
		{"name":"UI.setMinimapRenderMode", "caption":"UI:setMinimapRenderMode", "value":"UI:setMinimapRenderMode(mode)", "meta":"UI", "type":"local", "score":9},
		{"name":"UI.setShapeCircle", "caption":"UI:setShapeCircle", "value":"UI:setShapeCircle(uiname, x, y, radius)", "meta":"UI", "type":"local", "score":9},
		{"name":"UI.setShapeLine", "caption":"UI:setShapeLine", "value":"UI:setShapeLine(uiname, p1x, p1y, p2x, p2y)", "meta":"UI", "type":"local", "score":9},
		{"name":"UI.show", "caption":"UI:show", "value":"UI:show(name)", "meta":"UI", "type":"local", "score":9},
		{"name":"UI.world2RadarDist", "caption":"UI:world2RadarDist", "value":"UI:world2RadarDist(length)", "meta":"UI", "type":"local", "score":9},
		{"name":"UI.world2RadarPos", "caption":"UI:world2RadarPos", "value":"UI:world2RadarPos(x, y)", "meta":"UI", "type":"local", "score":9},
		{"name":"UI.xmllist", "caption":"UI:xmllist", "value":"UI:xmllist(self)", "meta":"UI", "type":"local", "score":9},
		{"name":"World.calcDistance", "caption":"World:calcDistance", "value":"World:calcDistance(pos1,pos2)", "meta":"World", "type":"local", "score":9},
		{"name":"World.despawnActor", "caption":"World:despawnActor", "value":"World:despawnActor(objid)", "meta":"World", "type":"local", "score":9},
		{"name":"World.despawnItemByBox", "caption":"World:despawnItemByBox", "value":"World:despawnItemByBox(x1, y1, z1, x2, y2, z2)", "meta":"World", "type":"local", "score":9},
		{"name":"World.getActorsByBox", "caption":"World:getActorsByBox", "value":"World:getActorsByBox(objtype, x1, y1, z1, x2, y2, z2)", "meta":"World", "type":"local", "score":9},
		{"name":"World.getAllPlayers", "caption":"World:getAllPlayers", "value":"World:getAllPlayers(alive)", "meta":"World", "type":"local", "score":9},
		{"name":"World.getCameraEditState", "caption":"World:getCameraEditState", "value":"World:getCameraEditState(self)", "meta":"World", "type":"local", "score":9},
		{"name":"World.getCustomCameraConfig", "caption":"World:getCustomCameraConfig", "value":"World:getCustomCameraConfig(self)", "meta":"World", "type":"local", "score":9},
		{"name":"World.getHours", "caption":"World:getHours", "value":"World:getHours(self)", "meta":"World", "type":"local", "score":9},
		{"name":"World.getPlayerTotal", "caption":"World:getPlayerTotal", "value":"World:getPlayerTotal(alive)", "meta":"World", "type":"local", "score":9},
		{"name":"World.getRangeXZ", "caption":"World:getRangeXZ", "value":"World:getRangeXZ(self)", "meta":"World", "type":"local", "score":9},
		{"name":"World.getRayBlock", "caption":"World:getRayBlock", "value":"World:getRayBlock(srcx, srcy, srcz, face, distance)", "meta":"World", "type":"local", "score":9},
		{"name":"World.getRayLength", "caption":"World:getRayLength", "value":"World:getRayLength(srcx, srcy, srcz, dstx, dsty, dstz, distance)", "meta":"World", "type":"local", "score":9},
		{"name":"World.isCreateRunMode", "caption":"World:isCreateRunMode", "value":"World:isCreateRunMode(self)", "meta":"World", "type":"local", "score":9},
		{"name":"World.isCreativeMode", "caption":"World:isCreativeMode", "value":"World:isCreativeMode(self)", "meta":"World", "type":"local", "score":9},
		{"name":"World.isCustomGame", "caption":"World:isCustomGame", "value":"World:isCustomGame(self)", "meta":"World", "type":"local", "score":9},
		{"name":"World.isDaytime", "caption":"World:isDaytime", "value":"World:isDaytime(self)", "meta":"World", "type":"local", "score":9},
		{"name":"World.isExtremityMode", "caption":"World:isExtremityMode", "value":"World:isExtremityMode(self)", "meta":"World", "type":"local", "score":9},
		{"name":"World.isFreeMode", "caption":"World:isFreeMode", "value":"World:isFreeMode(self)", "meta":"World", "type":"local", "score":9},
		{"name":"World.isGameMakerMode", "caption":"World:isGameMakerMode", "value":"World:isGameMakerMode(self)", "meta":"World", "type":"local", "score":9},
		{"name":"World.isGameMakerRunMode", "caption":"World:isGameMakerRunMode", "value":"World:isGameMakerRunMode(self)", "meta":"World", "type":"local", "score":9},
		{"name":"World.isGodMode", "caption":"World:isGodMode", "value":"World:isGodMode(self)", "meta":"World", "type":"local", "score":9},
		{"name":"World.isSurviveMode", "caption":"World:isSurviveMode", "value":"World:isSurviveMode(self)", "meta":"World", "type":"local", "score":9},
		{"name":"World.playSoundEffectOnPos", "caption":"World:playSoundEffectOnPos", "value":"World:playSoundEffectOnPos(pos, soundId, volume, pitch, isLoop)", "meta":"World", "type":"local", "score":9},
		{"name":"World.randomOnePlayer", "caption":"World:randomOnePlayer", "value":"World:randomOnePlayer(alive)", "meta":"World", "type":"local", "score":9},
		{"name":"World.randomParticleEffectID", "caption":"World:randomParticleEffectID", "value":"World:randomParticleEffectID(x, y, z, particleId, scale)", "meta":"World", "type":"local", "score":9},
		{"name":"World.setCameraEditState", "caption":"World:setCameraEditState", "value":"World:setCameraEditState(state)", "meta":"World", "type":"local", "score":9},
		{"name":"World.setEffectScaleOnPosition", "caption":"World:setEffectScaleOnPosition", "value":"World:setEffectScaleOnPosition(x, y, z, particleId, scale)", "meta":"World", "type":"local", "score":9},
		{"name":"World.setHours", "caption":"World:setHours", "value":"World:setHours(hour)", "meta":"World", "type":"local", "score":9},
		{"name":"World.spawnItem", "caption":"World:spawnItem", "value":"World:spawnItem(x, y, z, itemid, num)", "meta":"World", "type":"local", "score":9},
		{"name":"World.spawnProjectile", "caption":"World:spawnProjectile", "value":"World:spawnProjectile(shooter, itemid, x, y, z, dstx, dsty, dstz, speed)", "meta":"World", "type":"local", "score":9},
		{"name":"World.stopEffectOnPosition", "caption":"World:stopEffectOnPosition", "value":"World:stopEffectOnPosition(x, y, z, particleId)", "meta":"World", "type":"local", "score":9},
		{"name":"World.stopSoundEffectOnPos", "caption":"World:stopSoundEffectOnPos", "value":"World:stopSoundEffectOnPos(pos, soundId)", "meta":"World", "type":"local", "score":9},
		{"name":"WorldContainer.addFurnace", "caption":"WorldContainer:addFurnace", "value":"WorldContainer:addFurnace(x, y, z)", "meta":"WorldContainer", "type":"local", "score":9},
		{"name":"WorldContainer.addItemToContainer", "caption":"WorldContainer:addItemToContainer", "value":"WorldContainer:addItemToContainer(x, y, z, itemid, num)", "meta":"WorldContainer", "type":"local", "score":9},
		{"name":"WorldContainer.addStorageBox", "caption":"WorldContainer:addStorageBox", "value":"WorldContainer:addStorageBox(x, y, z)", "meta":"WorldContainer", "type":"local", "score":9},
		{"name":"WorldContainer.addStorageItem", "caption":"WorldContainer:addStorageItem", "value":"WorldContainer:addStorageItem(x, y, z, itemid, num)", "meta":"WorldContainer", "type":"local", "score":9},
		{"name":"WorldContainer.checkFurnace", "caption":"WorldContainer:checkFurnace", "value":"WorldContainer:checkFurnace(x, y, z)", "meta":"WorldContainer", "type":"local", "score":9},
		{"name":"WorldContainer.checkStorage", "caption":"WorldContainer:checkStorage", "value":"WorldContainer:checkStorage(x, y, z)", "meta":"WorldContainer", "type":"local", "score":9},
		{"name":"WorldContainer.checkStorageEmptyGrid", "caption":"WorldContainer:checkStorageEmptyGrid", "value":"WorldContainer:checkStorageEmptyGrid(x, y, z, itemid)", "meta":"WorldContainer", "type":"local", "score":9},
		{"name":"WorldContainer.clearContainer", "caption":"WorldContainer:clearContainer", "value":"WorldContainer:clearContainer(x, y, z)", "meta":"WorldContainer", "type":"local", "score":9},
		{"name":"WorldContainer.clearStorageBox", "caption":"WorldContainer:clearStorageBox", "value":"WorldContainer:clearStorageBox(x, y, z)", "meta":"WorldContainer", "type":"local", "score":9},
		{"name":"WorldContainer.getFurnaceHeatPercent", "caption":"WorldContainer:getFurnaceHeatPercent", "value":"WorldContainer:getFurnaceHeatPercent(x, y, z)", "meta":"WorldContainer", "type":"local", "score":9},
		{"name":"WorldContainer.getFurnaceMeltPercent", "caption":"WorldContainer:getFurnaceMeltPercent", "value":"WorldContainer:getFurnaceMeltPercent(x, y, z)", "meta":"WorldContainer", "type":"local", "score":9},
		{"name":"WorldContainer.getStorageItem", "caption":"WorldContainer:getStorageItem", "value":"WorldContainer:getStorageItem(x, y, z, offset)", "meta":"WorldContainer", "type":"local", "score":9},
		{"name":"WorldContainer.removeContainerItemByID", "caption":"WorldContainer:removeContainerItemByID", "value":"WorldContainer:removeContainerItemByID(x, y, z, itemid, num)", "meta":"WorldContainer", "type":"local", "score":9},
		{"name":"WorldContainer.removeFurnace", "caption":"WorldContainer:removeFurnace", "value":"WorldContainer:removeFurnace(x, y, z)", "meta":"WorldContainer", "type":"local", "score":9},
		{"name":"WorldContainer.removeStorageBox", "caption":"WorldContainer:removeStorageBox", "value":"WorldContainer:removeStorageBox(x, y, z)", "meta":"WorldContainer", "type":"local", "score":9},
		{"name":"WorldContainer.removeStorageItemByID", "caption":"WorldContainer:removeStorageItemByID", "value":"WorldContainer:removeStorageItemByID(x, y, z, itemid, num)", "meta":"WorldContainer", "type":"local", "score":9},
		{"name":"WorldContainer.removeStorageItemByIndex", "caption":"WorldContainer:removeStorageItemByIndex", "value":"WorldContainer:removeStorageItemByIndex(x, y, z, offset, num)", "meta":"WorldContainer", "type":"local", "score":9},
		{"name":"WorldContainer.setStorageItem", "caption":"WorldContainer:setStorageItem", "value":"WorldContainer:setStorageItem(x, y, z, offset, itemid, num)", "meta":"WorldContainer", "type":"local", "score":9},
	]
	return jsonObj
}

function GetGlobalVars() {
	var jsonObj = [
		{"name":"ACTORBODY_EFFECT.BODYFX_ACCUMFIRE", "caption":"BODYFX_ACCUMFIRE", "value":"ACTORBODY_EFFECT.BODYFX_ACCUMFIRE", "meta":"ACTORBODY_EFFECT", "type":"local", "score":6},
		{"name":"ACTORBODY_EFFECT.BODYFX_AI_ANGRY", "caption":"BODYFX_AI_ANGRY", "value":"ACTORBODY_EFFECT.BODYFX_AI_ANGRY", "meta":"ACTORBODY_EFFECT", "type":"local", "score":6},
		{"name":"ACTORBODY_EFFECT.BODYFX_AI_HUNGRY", "caption":"BODYFX_AI_HUNGRY", "value":"ACTORBODY_EFFECT.BODYFX_AI_HUNGRY", "meta":"ACTORBODY_EFFECT", "type":"local", "score":6},
		{"name":"ACTORBODY_EFFECT.BODYFX_AI_NEEDREEDS", "caption":"BODYFX_AI_NEEDREEDS", "value":"ACTORBODY_EFFECT.BODYFX_AI_NEEDREEDS", "meta":"ACTORBODY_EFFECT", "type":"local", "score":6},
		{"name":"ACTORBODY_EFFECT.BODYFX_AI_SLEEP", "caption":"BODYFX_AI_SLEEP", "value":"ACTORBODY_EFFECT.BODYFX_AI_SLEEP", "meta":"ACTORBODY_EFFECT", "type":"local", "score":6},
		{"name":"ACTORBODY_EFFECT.BODYFX_BALL_CHARGE", "caption":"BODYFX_BALL_CHARGE", "value":"ACTORBODY_EFFECT.BODYFX_BALL_CHARGE", "meta":"ACTORBODY_EFFECT", "type":"local", "score":6},
		{"name":"ACTORBODY_EFFECT.BODYFX_BALL_SHOOT_RELEASE", "caption":"BODYFX_BALL_SHOOT_RELEASE", "value":"ACTORBODY_EFFECT.BODYFX_BALL_SHOOT_RELEASE", "meta":"ACTORBODY_EFFECT", "type":"local", "score":6},
		{"name":"ACTORBODY_EFFECT.BODYFX_CONCEAL", "caption":"BODYFX_CONCEAL", "value":"ACTORBODY_EFFECT.BODYFX_CONCEAL", "meta":"ACTORBODY_EFFECT", "type":"local", "score":6},
		{"name":"ACTORBODY_EFFECT.BODYFX_DANCE", "caption":"BODYFX_DANCE", "value":"ACTORBODY_EFFECT.BODYFX_DANCE", "meta":"ACTORBODY_EFFECT", "type":"local", "score":6},
		{"name":"ACTORBODY_EFFECT.BODYFX_DEADPROTECT", "caption":"BODYFX_DEADPROTECT", "value":"ACTORBODY_EFFECT.BODYFX_DEADPROTECT", "meta":"ACTORBODY_EFFECT", "type":"local", "score":6},
		{"name":"ACTORBODY_EFFECT.BODYFX_DISAPPEAR", "caption":"BODYFX_DISAPPEAR", "value":"ACTORBODY_EFFECT.BODYFX_DISAPPEAR", "meta":"ACTORBODY_EFFECT", "type":"local", "score":6},
		{"name":"ACTORBODY_EFFECT.BODYFX_DIZZY", "caption":"BODYFX_DIZZY", "value":"ACTORBODY_EFFECT.BODYFX_DIZZY", "meta":"ACTORBODY_EFFECT", "type":"local", "score":6},
		{"name":"ACTORBODY_EFFECT.BODYFX_DRAGONDIE0", "caption":"BODYFX_DRAGONDIE0", "value":"ACTORBODY_EFFECT.BODYFX_DRAGONDIE0", "meta":"ACTORBODY_EFFECT", "type":"local", "score":6},
		{"name":"ACTORBODY_EFFECT.BODYFX_DRAGONDIE1", "caption":"BODYFX_DRAGONDIE1", "value":"ACTORBODY_EFFECT.BODYFX_DRAGONDIE1", "meta":"ACTORBODY_EFFECT", "type":"local", "score":6},
		{"name":"ACTORBODY_EFFECT.BODYFX_DRAGONDIE2", "caption":"BODYFX_DRAGONDIE2", "value":"ACTORBODY_EFFECT.BODYFX_DRAGONDIE2", "meta":"ACTORBODY_EFFECT", "type":"local", "score":6},
		{"name":"ACTORBODY_EFFECT.BODYFX_DRAGONFIRE", "caption":"BODYFX_DRAGONFIRE", "value":"ACTORBODY_EFFECT.BODYFX_DRAGONFIRE", "meta":"ACTORBODY_EFFECT", "type":"local", "score":6},
		{"name":"ACTORBODY_EFFECT.BODYFX_DRAGONSUMMON", "caption":"BODYFX_DRAGONSUMMON", "value":"ACTORBODY_EFFECT.BODYFX_DRAGONSUMMON", "meta":"ACTORBODY_EFFECT", "type":"local", "score":6},
		{"name":"ACTORBODY_EFFECT.BODYFX_ENCH_FALL", "caption":"BODYFX_ENCH_FALL", "value":"ACTORBODY_EFFECT.BODYFX_ENCH_FALL", "meta":"ACTORBODY_EFFECT", "type":"local", "score":6},
		{"name":"ACTORBODY_EFFECT.BODYFX_FEAR", "caption":"BODYFX_FEAR", "value":"ACTORBODY_EFFECT.BODYFX_FEAR", "meta":"ACTORBODY_EFFECT", "type":"local", "score":6},
		{"name":"ACTORBODY_EFFECT.BODYFX_FIRE", "caption":"BODYFX_FIRE", "value":"ACTORBODY_EFFECT.BODYFX_FIRE", "meta":"ACTORBODY_EFFECT", "type":"local", "score":6},
		{"name":"ACTORBODY_EFFECT.BODYFX_FORBIDDEN", "caption":"BODYFX_FORBIDDEN", "value":"ACTORBODY_EFFECT.BODYFX_FORBIDDEN", "meta":"ACTORBODY_EFFECT", "type":"local", "score":6},
		{"name":"ACTORBODY_EFFECT.BODYFX_HORSE_BENTENG", "caption":"BODYFX_HORSE_BENTENG", "value":"ACTORBODY_EFFECT.BODYFX_HORSE_BENTENG", "meta":"ACTORBODY_EFFECT", "type":"local", "score":6},
		{"name":"ACTORBODY_EFFECT.BODYFX_HORSE_FLY", "caption":"BODYFX_HORSE_FLY", "value":"ACTORBODY_EFFECT.BODYFX_HORSE_FLY", "meta":"ACTORBODY_EFFECT", "type":"local", "score":6},
		{"name":"ACTORBODY_EFFECT.BODYFX_HURT", "caption":"BODYFX_HURT", "value":"ACTORBODY_EFFECT.BODYFX_HURT", "meta":"ACTORBODY_EFFECT", "type":"local", "score":6},
		{"name":"ACTORBODY_EFFECT.BODYFX_INTERACTION", "caption":"BODYFX_INTERACTION", "value":"ACTORBODY_EFFECT.BODYFX_INTERACTION", "meta":"ACTORBODY_EFFECT", "type":"local", "score":6},
		{"name":"ACTORBODY_EFFECT.BODYFX_MAKETROUBLE", "caption":"BODYFX_MAKETROUBLE", "value":"ACTORBODY_EFFECT.BODYFX_MAKETROUBLE", "meta":"ACTORBODY_EFFECT", "type":"local", "score":6},
		{"name":"ACTORBODY_EFFECT.BODYFX_MILKING", "caption":"BODYFX_MILKING", "value":"ACTORBODY_EFFECT.BODYFX_MILKING", "meta":"ACTORBODY_EFFECT", "type":"local", "score":6},
		{"name":"ACTORBODY_EFFECT.BODYFX_PORTAL", "caption":"BODYFX_PORTAL", "value":"ACTORBODY_EFFECT.BODYFX_PORTAL", "meta":"ACTORBODY_EFFECT", "type":"local", "score":6},
		{"name":"ACTORBODY_EFFECT.BODYFX_ROLECOLLECT", "caption":"BODYFX_ROLECOLLECT", "value":"ACTORBODY_EFFECT.BODYFX_ROLECOLLECT", "meta":"ACTORBODY_EFFECT", "type":"local", "score":6},
		{"name":"ACTORBODY_EFFECT.BODYFX_ROLEJUMP", "caption":"BODYFX_ROLEJUMP", "value":"ACTORBODY_EFFECT.BODYFX_ROLEJUMP", "meta":"ACTORBODY_EFFECT", "type":"local", "score":6},
		{"name":"ACTORBODY_EFFECT.BODYFX_TAME_FAILED", "caption":"BODYFX_TAME_FAILED", "value":"ACTORBODY_EFFECT.BODYFX_TAME_FAILED", "meta":"ACTORBODY_EFFECT", "type":"local", "score":6},
		{"name":"ACTORBODY_EFFECT.BODYFX_TAME_FOOD", "caption":"BODYFX_TAME_FOOD", "value":"ACTORBODY_EFFECT.BODYFX_TAME_FOOD", "meta":"ACTORBODY_EFFECT", "type":"local", "score":6},
		{"name":"ACTORBODY_EFFECT.BODYFX_TAME_NOFOOD", "caption":"BODYFX_TAME_NOFOOD", "value":"ACTORBODY_EFFECT.BODYFX_TAME_NOFOOD", "meta":"ACTORBODY_EFFECT", "type":"local", "score":6},
		{"name":"ACTORBODY_EFFECT.BODYFX_TAME_SUCCEED", "caption":"BODYFX_TAME_SUCCEED", "value":"ACTORBODY_EFFECT.BODYFX_TAME_SUCCEED", "meta":"ACTORBODY_EFFECT", "type":"local", "score":6},
		{"name":"ACTORBODY_EFFECT.BODYFX_TRAINMOVE", "caption":"BODYFX_TRAINMOVE", "value":"ACTORBODY_EFFECT.BODYFX_TRAINMOVE", "meta":"ACTORBODY_EFFECT", "type":"local", "score":6},
		{"name":"ACTORBODY_EFFECT.BODYFX_TRANSPORT", "caption":"BODYFX_TRANSPORT", "value":"ACTORBODY_EFFECT.BODYFX_TRANSPORT", "meta":"ACTORBODY_EFFECT", "type":"local", "score":6},
		{"name":"ACTORBODY_EFFECT.BODYFX_WEAPON_FIRE", "caption":"BODYFX_WEAPON_FIRE", "value":"ACTORBODY_EFFECT.BODYFX_WEAPON_FIRE", "meta":"ACTORBODY_EFFECT", "type":"local", "score":6},
		{"name":"ACTORBODY_EFFECT.HUDFX_HEADSHOT", "caption":"HUDFX_HEADSHOT", "value":"ACTORBODY_EFFECT.HUDFX_HEADSHOT", "meta":"ACTORBODY_EFFECT", "type":"local", "score":6},
		{"name":"ACTORBODY_EFFECT.HUDFX_NORMALSHOT", "caption":"HUDFX_NORMALSHOT", "value":"ACTORBODY_EFFECT.HUDFX_NORMALSHOT", "meta":"ACTORBODY_EFFECT", "type":"local", "score":6},
		{"name":"ACTORBODY_EFFECT.TOOLFX_JETPACK2", "caption":"TOOLFX_JETPACK2", "value":"ACTORBODY_EFFECT.TOOLFX_JETPACK2", "meta":"ACTORBODY_EFFECT", "type":"local", "score":6},
		{"name":"BACKPACK_TYPE.EQUIP", "caption":"EQUIP", "value":"BACKPACK_TYPE.EQUIP", "meta":"BACKPACK_TYPE", "type":"local", "score":6},
		{"name":"BACKPACK_TYPE.INVENTORY", "caption":"INVENTORY", "value":"BACKPACK_TYPE.INVENTORY", "meta":"BACKPACK_TYPE", "type":"local", "score":6},
		{"name":"BACKPACK_TYPE.SHORTCUT", "caption":"SHORTCUT", "value":"BACKPACK_TYPE.SHORTCUT", "meta":"BACKPACK_TYPE", "type":"local", "score":6},
		{"name":"BLOCKATTR.BURNING_PROBABILITY", "caption":"BURNING_PROBABILITY", "value":"BLOCKATTR.BURNING_PROBABILITY", "meta":"BLOCKATTR", "type":"local", "score":6},
		{"name":"BLOCKATTR.BURNING_SPEED", "caption":"BURNING_SPEED", "value":"BLOCKATTR.BURNING_SPEED", "meta":"BLOCKATTR", "type":"local", "score":6},
		{"name":"BLOCKATTR.EXPLODE_RESISTANCE", "caption":"EXPLODE_RESISTANCE", "value":"BLOCKATTR.EXPLODE_RESISTANCE", "meta":"BLOCKATTR", "type":"local", "score":6},
		{"name":"BLOCKATTR.GLISSADE", "caption":"GLISSADE", "value":"BLOCKATTR.GLISSADE", "meta":"BLOCKATTR", "type":"local", "score":6},
		{"name":"BLOCKATTR.HARDNESS", "caption":"HARDNESS", "value":"BLOCKATTR.HARDNESS", "meta":"BLOCKATTR", "type":"local", "score":6},
		{"name":"BLOCKATTR.LIGHTNESS", "caption":"LIGHTNESS", "value":"BLOCKATTR.LIGHTNESS", "meta":"BLOCKATTR", "type":"local", "score":6},
		{"name":"BLOCKATTR_ENABLE.BEPUSHED_DROPITEM", "caption":"BEPUSHED_DROPITEM", "value":"BLOCKATTR_ENABLE.BEPUSHED_DROPITEM", "meta":"BLOCKATTR_ENABLE", "type":"local", "score":6},
		{"name":"BLOCKATTR_ENABLE.ENABLE_BEOPERATED", "caption":"ENABLE_BEOPERATED", "value":"BLOCKATTR_ENABLE.ENABLE_BEOPERATED", "meta":"BLOCKATTR_ENABLE", "type":"local", "score":6},
		{"name":"BLOCKATTR_ENABLE.ENABLE_BEPUSHED", "caption":"ENABLE_BEPUSHED", "value":"BLOCKATTR_ENABLE.ENABLE_BEPUSHED", "meta":"BLOCKATTR_ENABLE", "type":"local", "score":6},
		{"name":"BLOCKATTR_ENABLE.ENABLE_DESTROYED", "caption":"ENABLE_DESTROYED", "value":"BLOCKATTR_ENABLE.ENABLE_DESTROYED", "meta":"BLOCKATTR_ENABLE", "type":"local", "score":6},
		{"name":"BLOCKATTR_ENABLE.ENABLE_DROPITEM", "caption":"ENABLE_DROPITEM", "value":"BLOCKATTR_ENABLE.ENABLE_DROPITEM", "meta":"BLOCKATTR_ENABLE", "type":"local", "score":6},
		{"name":"BLOCKID.AIR", "caption":"AIR", "value":"BLOCKID.AIR", "meta":"BLOCKID", "type":"local", "score":6},
		{"name":"BLOCKSTATUS.ACTIVE", "caption":"ACTIVE", "value":"BLOCKSTATUS.ACTIVE", "meta":"BLOCKSTATUS", "type":"local", "score":6},
		{"name":"BLOCKSTATUS.INACTIVE", "caption":"INACTIVE", "value":"BLOCKSTATUS.INACTIVE", "meta":"BLOCKSTATUS", "type":"local", "score":6},
		{"name":"BPACK_SINDEX.BACKPACK_START_INDEX", "caption":"BACKPACK_START_INDEX", "value":"BPACK_SINDEX.BACKPACK_START_INDEX", "meta":"BPACK_SINDEX", "type":"local", "score":6},
		{"name":"BPACK_SINDEX.EQUIP_START_INDEX", "caption":"EQUIP_START_INDEX", "value":"BPACK_SINDEX.EQUIP_START_INDEX", "meta":"BPACK_SINDEX", "type":"local", "score":6},
		{"name":"BPACK_SINDEX.SHORTCUT_START_INDEX", "caption":"SHORTCUT_START_INDEX", "value":"BPACK_SINDEX.SHORTCUT_START_INDEX", "meta":"BPACK_SINDEX", "type":"local", "score":6},
		{"name":"BPACK_SINDEX.STORAGE_START_INDEX", "caption":"STORAGE_START_INDEX", "value":"BPACK_SINDEX.STORAGE_START_INDEX", "meta":"BPACK_SINDEX", "type":"local", "score":6},
		{"name":"CREATUREATTR.ATK_MELEE", "caption":"ATK_MELEE", "value":"CREATUREATTR.ATK_MELEE", "meta":"CREATUREATTR", "type":"local", "score":6},
		{"name":"CREATUREATTR.ATK_REMOTE", "caption":"ATK_REMOTE", "value":"CREATUREATTR.ATK_REMOTE", "meta":"CREATUREATTR", "type":"local", "score":6},
		{"name":"CREATUREATTR.CUR_HP", "caption":"CUR_HP", "value":"CREATUREATTR.CUR_HP", "meta":"CREATUREATTR", "type":"local", "score":6},
		{"name":"CREATUREATTR.CUR_HUNGER", "caption":"CUR_HUNGER", "value":"CREATUREATTR.CUR_HUNGER", "meta":"CREATUREATTR", "type":"local", "score":6},
		{"name":"CREATUREATTR.CUR_OXYGEN", "caption":"CUR_OXYGEN", "value":"CREATUREATTR.CUR_OXYGEN", "meta":"CREATUREATTR", "type":"local", "score":6},
		{"name":"CREATUREATTR.DEF_MELEE", "caption":"DEF_MELEE", "value":"CREATUREATTR.DEF_MELEE", "meta":"CREATUREATTR", "type":"local", "score":6},
		{"name":"CREATUREATTR.DEF_REMOTE", "caption":"DEF_REMOTE", "value":"CREATUREATTR.DEF_REMOTE", "meta":"CREATUREATTR", "type":"local", "score":6},
		{"name":"CREATUREATTR.DIMENSION", "caption":"DIMENSION", "value":"CREATUREATTR.DIMENSION", "meta":"CREATUREATTR", "type":"local", "score":6},
		{"name":"CREATUREATTR.DODGE", "caption":"DODGE", "value":"CREATUREATTR.DODGE", "meta":"CREATUREATTR", "type":"local", "score":6},
		{"name":"CREATUREATTR.HP_RECOVER", "caption":"HP_RECOVER", "value":"CREATUREATTR.HP_RECOVER", "meta":"CREATUREATTR", "type":"local", "score":6},
		{"name":"CREATUREATTR.JUMP_POWER", "caption":"JUMP_POWER", "value":"CREATUREATTR.JUMP_POWER", "meta":"CREATUREATTR", "type":"local", "score":6},
		{"name":"CREATUREATTR.MAX_HP", "caption":"MAX_HP", "value":"CREATUREATTR.MAX_HP", "meta":"CREATUREATTR", "type":"local", "score":6},
		{"name":"CREATUREATTR.MAX_HUNGER", "caption":"MAX_HUNGER", "value":"CREATUREATTR.MAX_HUNGER", "meta":"CREATUREATTR", "type":"local", "score":6},
		{"name":"CREATUREATTR.MAX_OXYGEN", "caption":"MAX_OXYGEN", "value":"CREATUREATTR.MAX_OXYGEN", "meta":"CREATUREATTR", "type":"local", "score":6},
		{"name":"CREATUREATTR.RECOVER_OXYGEN", "caption":"RECOVER_OXYGEN", "value":"CREATUREATTR.RECOVER_OXYGEN", "meta":"CREATUREATTR", "type":"local", "score":6},
		{"name":"CREATUREATTR.RUN_SPEED", "caption":"RUN_SPEED", "value":"CREATUREATTR.RUN_SPEED", "meta":"CREATUREATTR", "type":"local", "score":6},
		{"name":"CREATUREATTR.SWIN_SPEED", "caption":"SWIN_SPEED", "value":"CREATUREATTR.SWIN_SPEED", "meta":"CREATUREATTR", "type":"local", "score":6},
		{"name":"CREATUREATTR.WALK_SPEED", "caption":"WALK_SPEED", "value":"CREATUREATTR.WALK_SPEED", "meta":"CREATUREATTR", "type":"local", "score":6},
		{"name":"CREATUREATTR.WEIGHT", "caption":"WEIGHT", "value":"CREATUREATTR.WEIGHT", "meta":"CREATUREATTR", "type":"local", "score":6},
		{"name":"CREATUREATTR_ENABLE.ENABLE_ATTACK", "caption":"ENABLE_ATTACK", "value":"CREATUREATTR_ENABLE.ENABLE_ATTACK", "meta":"CREATUREATTR_ENABLE", "type":"local", "score":6},
		{"name":"CREATUREATTR_ENABLE.ENABLE_BEATTACKED", "caption":"ENABLE_BEATTACKED", "value":"CREATUREATTR_ENABLE.ENABLE_BEATTACKED", "meta":"CREATUREATTR_ENABLE", "type":"local", "score":6},
		{"name":"CREATUREATTR_ENABLE.ENABLE_BEKILLED", "caption":"ENABLE_BEKILLED", "value":"CREATUREATTR_ENABLE.ENABLE_BEKILLED", "meta":"CREATUREATTR_ENABLE", "type":"local", "score":6},
		{"name":"CREATUREATTR_ENABLE.ENABLE_DEATHDROPITEM", "caption":"ENABLE_DEATHDROPITEM", "value":"CREATUREATTR_ENABLE.ENABLE_DEATHDROPITEM", "meta":"CREATUREATTR_ENABLE", "type":"local", "score":6},
		{"name":"CREATUREATTR_ENABLE.ENABLE_MOVE", "caption":"ENABLE_MOVE", "value":"CREATUREATTR_ENABLE.ENABLE_MOVE", "meta":"CREATUREATTR_ENABLE", "type":"local", "score":6},
		{"name":"CREATUREATTR_ENABLE.ENABLE_PICKUP", "caption":"ENABLE_PICKUP", "value":"CREATUREATTR_ENABLE.ENABLE_PICKUP", "meta":"CREATUREATTR_ENABLE", "type":"local", "score":6},
		{"name":"CREATUREMOTION.ATK_MELEE", "caption":"ATK_MELEE", "value":"CREATUREMOTION.ATK_MELEE", "meta":"CREATUREMOTION", "type":"local", "score":6},
		{"name":"CREATUREMOTION.ATK_REMOTE", "caption":"ATK_REMOTE", "value":"CREATUREMOTION.ATK_REMOTE", "meta":"CREATUREMOTION", "type":"local", "score":6},
		{"name":"CREATUREMOTION.BEATTRACTED", "caption":"BEATTRACTED", "value":"CREATUREMOTION.BEATTRACTED", "meta":"CREATUREMOTION", "type":"local", "score":6},
		{"name":"CREATUREMOTION.COPULATION", "caption":"COPULATION", "value":"CREATUREMOTION.COPULATION", "meta":"CREATUREMOTION", "type":"local", "score":6},
		{"name":"CREATUREMOTION.FOLLOW", "caption":"FOLLOW", "value":"CREATUREMOTION.FOLLOW", "meta":"CREATUREMOTION", "type":"local", "score":6},
		{"name":"CREATUREMOTION.IDLE", "caption":"IDLE", "value":"CREATUREMOTION.IDLE", "meta":"CREATUREMOTION", "type":"local", "score":6},
		{"name":"CREATUREMOTION.RUN_AWAY", "caption":"RUN_AWAY", "value":"CREATUREMOTION.RUN_AWAY", "meta":"CREATUREMOTION", "type":"local", "score":6},
		{"name":"CREATUREMOTION.SELF_BOMB", "caption":"SELF_BOMB", "value":"CREATUREMOTION.SELF_BOMB", "meta":"CREATUREMOTION", "type":"local", "score":6},
		{"name":"CREATUREMOTION.STANDBY", "caption":"STANDBY", "value":"CREATUREMOTION.STANDBY", "meta":"CREATUREMOTION", "type":"local", "score":6},
		{"name":"CREATUREMOTION.STROLL", "caption":"STROLL", "value":"CREATUREMOTION.STROLL", "meta":"CREATUREMOTION", "type":"local", "score":6},
		{"name":"CREATUREMOTION.SWIM", "caption":"SWIM", "value":"CREATUREMOTION.SWIM", "meta":"CREATUREMOTION", "type":"local", "score":6},
		{"name":"CameraEditState.CAMERA_EDIT_STATE_EDIT", "caption":"CAMERA_EDIT_STATE_EDIT", "value":"CameraEditState.CAMERA_EDIT_STATE_EDIT", "meta":"CameraEditState", "type":"local", "score":6},
		{"name":"CameraEditState.CAMERA_EDIT_STATE_NULL", "caption":"CAMERA_EDIT_STATE_NULL", "value":"CameraEditState.CAMERA_EDIT_STATE_NULL", "meta":"CameraEditState", "type":"local", "score":6},
		{"name":"CameraEditState.CAMERA_EDIT_STATE_TEST", "caption":"CAMERA_EDIT_STATE_TEST", "value":"CameraEditState.CAMERA_EDIT_STATE_TEST", "meta":"CameraEditState", "type":"local", "score":6},
		{"name":"EQUIP_SLOT_TYPE.EQUIP_BREAST", "caption":"EQUIP_BREAST", "value":"EQUIP_SLOT_TYPE.EQUIP_BREAST", "meta":"EQUIP_SLOT_TYPE", "type":"local", "score":6},
		{"name":"EQUIP_SLOT_TYPE.EQUIP_HEAD", "caption":"EQUIP_HEAD", "value":"EQUIP_SLOT_TYPE.EQUIP_HEAD", "meta":"EQUIP_SLOT_TYPE", "type":"local", "score":6},
		{"name":"EQUIP_SLOT_TYPE.EQUIP_LEGGING", "caption":"EQUIP_LEGGING", "value":"EQUIP_SLOT_TYPE.EQUIP_LEGGING", "meta":"EQUIP_SLOT_TYPE", "type":"local", "score":6},
		{"name":"EQUIP_SLOT_TYPE.EQUIP_PIFENG", "caption":"EQUIP_PIFENG", "value":"EQUIP_SLOT_TYPE.EQUIP_PIFENG", "meta":"EQUIP_SLOT_TYPE", "type":"local", "score":6},
		{"name":"EQUIP_SLOT_TYPE.EQUIP_SHOE", "caption":"EQUIP_SHOE", "value":"EQUIP_SLOT_TYPE.EQUIP_SHOE", "meta":"EQUIP_SLOT_TYPE", "type":"local", "score":6},
		{"name":"EQUIP_SLOT_TYPE.EQUIP_WEAPON", "caption":"EQUIP_WEAPON", "value":"EQUIP_SLOT_TYPE.EQUIP_WEAPON", "meta":"EQUIP_SLOT_TYPE", "type":"local", "score":6},
		{"name":"EQUIP_SLOT_TYPE.MAX_EQUIP_SLOTS", "caption":"MAX_EQUIP_SLOTS", "value":"EQUIP_SLOT_TYPE.MAX_EQUIP_SLOTS", "meta":"EQUIP_SLOT_TYPE", "type":"local", "score":6},
		{"name":"ErrorCode.FAILED", "caption":"FAILED", "value":"ErrorCode.FAILED", "meta":"ErrorCode", "type":"local", "score":6},
		{"name":"ErrorCode.OK", "caption":"OK", "value":"ErrorCode.OK", "meta":"ErrorCode", "type":"local", "score":6},
		{"name":"FACE_DIRECTION.DIR_NEG_X", "caption":"DIR_NEG_X", "value":"FACE_DIRECTION.DIR_NEG_X", "meta":"FACE_DIRECTION", "type":"local", "score":6},
		{"name":"FACE_DIRECTION.DIR_NEG_Y", "caption":"DIR_NEG_Y", "value":"FACE_DIRECTION.DIR_NEG_Y", "meta":"FACE_DIRECTION", "type":"local", "score":6},
		{"name":"FACE_DIRECTION.DIR_NEG_Z", "caption":"DIR_NEG_Z", "value":"FACE_DIRECTION.DIR_NEG_Z", "meta":"FACE_DIRECTION", "type":"local", "score":6},
		{"name":"FACE_DIRECTION.DIR_NOT_INIT", "caption":"DIR_NOT_INIT", "value":"FACE_DIRECTION.DIR_NOT_INIT", "meta":"FACE_DIRECTION", "type":"local", "score":6},
		{"name":"FACE_DIRECTION.DIR_POS_X", "caption":"DIR_POS_X", "value":"FACE_DIRECTION.DIR_POS_X", "meta":"FACE_DIRECTION", "type":"local", "score":6},
		{"name":"FACE_DIRECTION.DIR_POS_Y", "caption":"DIR_POS_Y", "value":"FACE_DIRECTION.DIR_POS_Y", "meta":"FACE_DIRECTION", "type":"local", "score":6},
		{"name":"FACE_DIRECTION.DIR_POS_Z", "caption":"DIR_POS_Z", "value":"FACE_DIRECTION.DIR_POS_Z", "meta":"FACE_DIRECTION", "type":"local", "score":6},
		{"name":"GSOUND_TYPE.GSOUND_DESTROY", "caption":"GSOUND_DESTROY", "value":"GSOUND_TYPE.GSOUND_DESTROY", "meta":"GSOUND_TYPE", "type":"local", "score":6},
		{"name":"GSOUND_TYPE.GSOUND_DIG", "caption":"GSOUND_DIG", "value":"GSOUND_TYPE.GSOUND_DIG", "meta":"GSOUND_TYPE", "type":"local", "score":6},
		{"name":"GSOUND_TYPE.GSOUND_FALLGROUND", "caption":"GSOUND_FALLGROUND", "value":"GSOUND_TYPE.GSOUND_FALLGROUND", "meta":"GSOUND_TYPE", "type":"local", "score":6},
		{"name":"GSOUND_TYPE.GSOUND_PLACE", "caption":"GSOUND_PLACE", "value":"GSOUND_TYPE.GSOUND_PLACE", "meta":"GSOUND_TYPE", "type":"local", "score":6},
		{"name":"GSOUND_TYPE.GSOUND_WALK", "caption":"GSOUND_WALK", "value":"GSOUND_TYPE.GSOUND_WALK", "meta":"GSOUND_TYPE", "type":"local", "score":6},
		{"name":"HURTTYPE.ANTIINJURY", "caption":"ANTIINJURY", "value":"HURTTYPE.ANTIINJURY", "meta":"HURTTYPE", "type":"local", "score":6},
		{"name":"HURTTYPE.ANVIL", "caption":"ANVIL", "value":"HURTTYPE.ANVIL", "meta":"HURTTYPE", "type":"local", "score":6},
		{"name":"HURTTYPE.ASPHYXIA", "caption":"ASPHYXIA", "value":"HURTTYPE.ASPHYXIA", "meta":"HURTTYPE", "type":"local", "score":6},
		{"name":"HURTTYPE.BOMB", "caption":"BOMB", "value":"HURTTYPE.BOMB", "meta":"HURTTYPE", "type":"local", "score":6},
		{"name":"HURTTYPE.BURNING", "caption":"BURNING", "value":"HURTTYPE.BURNING", "meta":"HURTTYPE", "type":"local", "score":6},
		{"name":"HURTTYPE.CACTUS", "caption":"CACTUS", "value":"HURTTYPE.CACTUS", "meta":"HURTTYPE", "type":"local", "score":6},
		{"name":"HURTTYPE.DROWN", "caption":"DROWN", "value":"HURTTYPE.DROWN", "meta":"HURTTYPE", "type":"local", "score":6},
		{"name":"HURTTYPE.FALL", "caption":"FALL", "value":"HURTTYPE.FALL", "meta":"HURTTYPE", "type":"local", "score":6},
		{"name":"HURTTYPE.LASER", "caption":"LASER", "value":"HURTTYPE.LASER", "meta":"HURTTYPE", "type":"local", "score":6},
		{"name":"HURTTYPE.MAGIC", "caption":"MAGIC", "value":"HURTTYPE.MAGIC", "meta":"HURTTYPE", "type":"local", "score":6},
		{"name":"HURTTYPE.MELEE", "caption":"MELEE", "value":"HURTTYPE.MELEE", "meta":"HURTTYPE", "type":"local", "score":6},
		{"name":"HURTTYPE.PHYSICS", "caption":"PHYSICS", "value":"HURTTYPE.PHYSICS", "meta":"HURTTYPE", "type":"local", "score":6},
		{"name":"HURTTYPE.REMOTE", "caption":"REMOTE", "value":"HURTTYPE.REMOTE", "meta":"HURTTYPE", "type":"local", "score":6},
		{"name":"HURTTYPE.SUFFOCATE", "caption":"SUFFOCATE", "value":"HURTTYPE.SUFFOCATE", "meta":"HURTTYPE", "type":"local", "score":6},
		{"name":"HURTTYPE.SUN", "caption":"SUN", "value":"HURTTYPE.SUN", "meta":"HURTTYPE", "type":"local", "score":6},
		{"name":"HURTTYPE.TOXIN", "caption":"TOXIN", "value":"HURTTYPE.TOXIN", "meta":"HURTTYPE", "type":"local", "score":6},
		{"name":"HURTTYPE.WITHER", "caption":"WITHER", "value":"HURTTYPE.WITHER", "meta":"HURTTYPE", "type":"local", "score":6},
		{"name":"MAPMARK_TYPE.MMARK_CIRCLE", "caption":"MMARK_CIRCLE", "value":"MAPMARK_TYPE.MMARK_CIRCLE", "meta":"MAPMARK_TYPE", "type":"local", "score":6},
		{"name":"MAPMARK_TYPE.MMARK_LINE", "caption":"MMARK_LINE", "value":"MAPMARK_TYPE.MMARK_LINE", "meta":"MAPMARK_TYPE", "type":"local", "score":6},
		{"name":"MAPMARK_TYPE.MMARK_RECTANGLE", "caption":"MMARK_RECTANGLE", "value":"MAPMARK_TYPE.MMARK_RECTANGLE", "meta":"MAPMARK_TYPE", "type":"local", "score":6},
		{"name":"MODATTRIB_TYPE.MAX_MOB_MODATTR", "caption":"MAX_MOB_MODATTR", "value":"MODATTRIB_TYPE.MAX_MOB_MODATTR", "meta":"MODATTRIB_TYPE", "type":"local", "score":6},
		{"name":"MODATTRIB_TYPE.MAX_MOD_ATTRIB", "caption":"MAX_MOD_ATTRIB", "value":"MODATTRIB_TYPE.MAX_MOD_ATTRIB", "meta":"MODATTRIB_TYPE", "type":"local", "score":6},
		{"name":"MODATTRIB_TYPE.MAX_PLAYER_MODATTR", "caption":"MAX_PLAYER_MODATTR", "value":"MODATTRIB_TYPE.MAX_PLAYER_MODATTR", "meta":"MODATTRIB_TYPE", "type":"local", "score":6},
		{"name":"MODATTRIB_TYPE.MODATTR_ACTOR_SCALE", "caption":"MODATTR_ACTOR_SCALE", "value":"MODATTRIB_TYPE.MODATTR_ACTOR_SCALE", "meta":"MODATTRIB_TYPE", "type":"local", "score":6},
		{"name":"MODATTRIB_TYPE.MODATTR_ARMOR_EXPLODE", "caption":"MODATTR_ARMOR_EXPLODE", "value":"MODATTRIB_TYPE.MODATTR_ARMOR_EXPLODE", "meta":"MODATTRIB_TYPE", "type":"local", "score":6},
		{"name":"MODATTRIB_TYPE.MODATTR_ARMOR_PUNCH", "caption":"MODATTR_ARMOR_PUNCH", "value":"MODATTRIB_TYPE.MODATTR_ARMOR_PUNCH", "meta":"MODATTRIB_TYPE", "type":"local", "score":6},
		{"name":"MODATTRIB_TYPE.MODATTR_ARMOR_RANGE", "caption":"MODATTR_ARMOR_RANGE", "value":"MODATTRIB_TYPE.MODATTR_ARMOR_RANGE", "meta":"MODATTRIB_TYPE", "type":"local", "score":6},
		{"name":"MODATTRIB_TYPE.MODATTR_ATTACK_ANIMAL", "caption":"MODATTR_ATTACK_ANIMAL", "value":"MODATTRIB_TYPE.MODATTR_ATTACK_ANIMAL", "meta":"MODATTRIB_TYPE", "type":"local", "score":6},
		{"name":"MODATTRIB_TYPE.MODATTR_ATTACK_EXPLODE", "caption":"MODATTR_ATTACK_EXPLODE", "value":"MODATTRIB_TYPE.MODATTR_ATTACK_EXPLODE", "meta":"MODATTRIB_TYPE", "type":"local", "score":6},
		{"name":"MODATTRIB_TYPE.MODATTR_ATTACK_FIRE", "caption":"MODATTR_ATTACK_FIRE", "value":"MODATTRIB_TYPE.MODATTR_ATTACK_FIRE", "meta":"MODATTRIB_TYPE", "type":"local", "score":6},
		{"name":"MODATTRIB_TYPE.MODATTR_ATTACK_PLAYER", "caption":"MODATTR_ATTACK_PLAYER", "value":"MODATTRIB_TYPE.MODATTR_ATTACK_PLAYER", "meta":"MODATTRIB_TYPE", "type":"local", "score":6},
		{"name":"MODATTRIB_TYPE.MODATTR_ATTACK_POISON", "caption":"MODATTR_ATTACK_POISON", "value":"MODATTRIB_TYPE.MODATTR_ATTACK_POISON", "meta":"MODATTRIB_TYPE", "type":"local", "score":6},
		{"name":"MODATTRIB_TYPE.MODATTR_ATTACK_PUNCH", "caption":"MODATTR_ATTACK_PUNCH", "value":"MODATTRIB_TYPE.MODATTR_ATTACK_PUNCH", "meta":"MODATTRIB_TYPE", "type":"local", "score":6},
		{"name":"MODATTRIB_TYPE.MODATTR_ATTACK_RANGE", "caption":"MODATTR_ATTACK_RANGE", "value":"MODATTRIB_TYPE.MODATTR_ATTACK_RANGE", "meta":"MODATTRIB_TYPE", "type":"local", "score":6},
		{"name":"MODATTRIB_TYPE.MODATTR_ATTACK_UNDEAD", "caption":"MODATTR_ATTACK_UNDEAD", "value":"MODATTRIB_TYPE.MODATTR_ATTACK_UNDEAD", "meta":"MODATTRIB_TYPE", "type":"local", "score":6},
		{"name":"MODATTRIB_TYPE.MODATTR_ATTACK_WITHER", "caption":"MODATTR_ATTACK_WITHER", "value":"MODATTRIB_TYPE.MODATTR_ATTACK_WITHER", "meta":"MODATTRIB_TYPE", "type":"local", "score":6},
		{"name":"MODATTRIB_TYPE.MODATTR_CRITICAL_HIT", "caption":"MODATTR_CRITICAL_HIT", "value":"MODATTRIB_TYPE.MODATTR_CRITICAL_HIT", "meta":"MODATTRIB_TYPE", "type":"local", "score":6},
		{"name":"MODATTRIB_TYPE.MODATTR_DAMAGED_EXPLODE", "caption":"MODATTR_DAMAGED_EXPLODE", "value":"MODATTRIB_TYPE.MODATTR_DAMAGED_EXPLODE", "meta":"MODATTRIB_TYPE", "type":"local", "score":6},
		{"name":"MODATTRIB_TYPE.MODATTR_DAMAGED_FALLING", "caption":"MODATTR_DAMAGED_FALLING", "value":"MODATTRIB_TYPE.MODATTR_DAMAGED_FALLING", "meta":"MODATTRIB_TYPE", "type":"local", "score":6},
		{"name":"MODATTRIB_TYPE.MODATTR_DAMAGED_FIRE", "caption":"MODATTR_DAMAGED_FIRE", "value":"MODATTRIB_TYPE.MODATTR_DAMAGED_FIRE", "meta":"MODATTRIB_TYPE", "type":"local", "score":6},
		{"name":"MODATTRIB_TYPE.MODATTR_DAMAGED_POISON", "caption":"MODATTR_DAMAGED_POISON", "value":"MODATTRIB_TYPE.MODATTR_DAMAGED_POISON", "meta":"MODATTRIB_TYPE", "type":"local", "score":6},
		{"name":"MODATTRIB_TYPE.MODATTR_DAMAGED_PUNCH", "caption":"MODATTR_DAMAGED_PUNCH", "value":"MODATTRIB_TYPE.MODATTR_DAMAGED_PUNCH", "meta":"MODATTRIB_TYPE", "type":"local", "score":6},
		{"name":"MODATTRIB_TYPE.MODATTR_DAMAGED_RANGE", "caption":"MODATTR_DAMAGED_RANGE", "value":"MODATTRIB_TYPE.MODATTR_DAMAGED_RANGE", "meta":"MODATTRIB_TYPE", "type":"local", "score":6},
		{"name":"MODATTRIB_TYPE.MODATTR_DAMAGED_WITHER", "caption":"MODATTR_DAMAGED_WITHER", "value":"MODATTRIB_TYPE.MODATTR_DAMAGED_WITHER", "meta":"MODATTRIB_TYPE", "type":"local", "score":6},
		{"name":"MODATTRIB_TYPE.MODATTR_DAMAGE_ABSORB", "caption":"MODATTR_DAMAGE_ABSORB", "value":"MODATTRIB_TYPE.MODATTR_DAMAGE_ABSORB", "meta":"MODATTRIB_TYPE", "type":"local", "score":6},
		{"name":"MODATTRIB_TYPE.MODATTR_DIG_SPEED", "caption":"MODATTR_DIG_SPEED", "value":"MODATTRIB_TYPE.MODATTR_DIG_SPEED", "meta":"MODATTRIB_TYPE", "type":"local", "score":6},
		{"name":"MODATTRIB_TYPE.MODATTR_JUMP_SPEED", "caption":"MODATTR_JUMP_SPEED", "value":"MODATTRIB_TYPE.MODATTR_JUMP_SPEED", "meta":"MODATTRIB_TYPE", "type":"local", "score":6},
		{"name":"MODATTRIB_TYPE.MODATTR_KNOCK", "caption":"MODATTR_KNOCK", "value":"MODATTRIB_TYPE.MODATTR_KNOCK", "meta":"MODATTRIB_TYPE", "type":"local", "score":6},
		{"name":"MODATTRIB_TYPE.MODATTR_KNOCK_RESIST", "caption":"MODATTR_KNOCK_RESIST", "value":"MODATTRIB_TYPE.MODATTR_KNOCK_RESIST", "meta":"MODATTRIB_TYPE", "type":"local", "score":6},
		{"name":"MODATTRIB_TYPE.MODATTR_KNOCK_RESIST_PROB", "caption":"MODATTR_KNOCK_RESIST_PROB", "value":"MODATTRIB_TYPE.MODATTR_KNOCK_RESIST_PROB", "meta":"MODATTRIB_TYPE", "type":"local", "score":6},
		{"name":"MODATTRIB_TYPE.MODATTR_LUCK_DIG", "caption":"MODATTR_LUCK_DIG", "value":"MODATTRIB_TYPE.MODATTR_LUCK_DIG", "meta":"MODATTRIB_TYPE", "type":"local", "score":6},
		{"name":"MODATTRIB_TYPE.MODATTR_LUCK_KILLMOB", "caption":"MODATTR_LUCK_KILLMOB", "value":"MODATTRIB_TYPE.MODATTR_LUCK_KILLMOB", "meta":"MODATTRIB_TYPE", "type":"local", "score":6},
		{"name":"MODATTRIB_TYPE.MODATTR_MOVE_SPEED", "caption":"MODATTR_MOVE_SPEED", "value":"MODATTRIB_TYPE.MODATTR_MOVE_SPEED", "meta":"MODATTRIB_TYPE", "type":"local", "score":6},
		{"name":"MODATTRIB_TYPE.MODATTR_OXYGEN_SUPPLY", "caption":"MODATTR_OXYGEN_SUPPLY", "value":"MODATTRIB_TYPE.MODATTR_OXYGEN_SUPPLY", "meta":"MODATTRIB_TYPE", "type":"local", "score":6},
		{"name":"MODATTRIB_TYPE.MODATTR_SWIM_SPEED", "caption":"MODATTR_SWIM_SPEED", "value":"MODATTRIB_TYPE.MODATTR_SWIM_SPEED", "meta":"MODATTRIB_TYPE", "type":"local", "score":6},
		{"name":"MODATTRIB_TYPE.MODATTR_VIEW_BRIGHT", "caption":"MODATTR_VIEW_BRIGHT", "value":"MODATTRIB_TYPE.MODATTR_VIEW_BRIGHT", "meta":"MODATTRIB_TYPE", "type":"local", "score":6},
		{"name":"OBJ_TYPE.OBJTYPE_CREATURE", "caption":"OBJTYPE_CREATURE", "value":"OBJ_TYPE.OBJTYPE_CREATURE", "meta":"OBJ_TYPE", "type":"local", "score":6},
		{"name":"OBJ_TYPE.OBJTYPE_DROPITEM", "caption":"OBJTYPE_DROPITEM", "value":"OBJ_TYPE.OBJTYPE_DROPITEM", "meta":"OBJ_TYPE", "type":"local", "score":6},
		{"name":"OBJ_TYPE.OBJTYPE_MISSILE", "caption":"OBJTYPE_MISSILE", "value":"OBJ_TYPE.OBJTYPE_MISSILE", "meta":"OBJ_TYPE", "type":"local", "score":6},
		{"name":"OBJ_TYPE.OBJTYPE_PLAYER", "caption":"OBJTYPE_PLAYER", "value":"OBJ_TYPE.OBJTYPE_PLAYER", "meta":"OBJ_TYPE", "type":"local", "score":6},
		{"name":"PLAYERATTR.ATK_MELEE", "caption":"ATK_MELEE", "value":"PLAYERATTR.ATK_MELEE", "meta":"PLAYERATTR", "type":"local", "score":6},
		{"name":"PLAYERATTR.ATK_REMOTE", "caption":"ATK_REMOTE", "value":"PLAYERATTR.ATK_REMOTE", "meta":"PLAYERATTR", "type":"local", "score":6},
		{"name":"PLAYERATTR.CUR_HP", "caption":"CUR_HP", "value":"PLAYERATTR.CUR_HP", "meta":"PLAYERATTR", "type":"local", "score":6},
		{"name":"PLAYERATTR.CUR_HUNGER", "caption":"CUR_HUNGER", "value":"PLAYERATTR.CUR_HUNGER", "meta":"PLAYERATTR", "type":"local", "score":6},
		{"name":"PLAYERATTR.CUR_OXYGEN", "caption":"CUR_OXYGEN", "value":"PLAYERATTR.CUR_OXYGEN", "meta":"PLAYERATTR", "type":"local", "score":6},
		{"name":"PLAYERATTR.DEF_MELEE", "caption":"DEF_MELEE", "value":"PLAYERATTR.DEF_MELEE", "meta":"PLAYERATTR", "type":"local", "score":6},
		{"name":"PLAYERATTR.DEF_REMOTE", "caption":"DEF_REMOTE", "value":"PLAYERATTR.DEF_REMOTE", "meta":"PLAYERATTR", "type":"local", "score":6},
		{"name":"PLAYERATTR.DIMENSION", "caption":"DIMENSION", "value":"PLAYERATTR.DIMENSION", "meta":"PLAYERATTR", "type":"local", "score":6},
		{"name":"PLAYERATTR.DODGE", "caption":"DODGE", "value":"PLAYERATTR.DODGE", "meta":"PLAYERATTR", "type":"local", "score":6},
		{"name":"PLAYERATTR.HP_RECOVER", "caption":"HP_RECOVER", "value":"PLAYERATTR.HP_RECOVER", "meta":"PLAYERATTR", "type":"local", "score":6},
		{"name":"PLAYERATTR.JUMP_POWER", "caption":"JUMP_POWER", "value":"PLAYERATTR.JUMP_POWER", "meta":"PLAYERATTR", "type":"local", "score":6},
		{"name":"PLAYERATTR.LEVEL", "caption":"LEVEL", "value":"PLAYERATTR.LEVEL", "meta":"PLAYERATTR", "type":"local", "score":6},
		{"name":"PLAYERATTR.LIFE_NUM", "caption":"LIFE_NUM", "value":"PLAYERATTR.LIFE_NUM", "meta":"PLAYERATTR", "type":"local", "score":6},
		{"name":"PLAYERATTR.MAX_HP", "caption":"MAX_HP", "value":"PLAYERATTR.MAX_HP", "meta":"PLAYERATTR", "type":"local", "score":6},
		{"name":"PLAYERATTR.MAX_HUNGER", "caption":"MAX_HUNGER", "value":"PLAYERATTR.MAX_HUNGER", "meta":"PLAYERATTR", "type":"local", "score":6},
		{"name":"PLAYERATTR.MAX_OXYGEN", "caption":"MAX_OXYGEN", "value":"PLAYERATTR.MAX_OXYGEN", "meta":"PLAYERATTR", "type":"local", "score":6},
		{"name":"PLAYERATTR.RECOVER_OXYGEN", "caption":"RECOVER_OXYGEN", "value":"PLAYERATTR.RECOVER_OXYGEN", "meta":"PLAYERATTR", "type":"local", "score":6},
		{"name":"PLAYERATTR.RUN_SPEED", "caption":"RUN_SPEED", "value":"PLAYERATTR.RUN_SPEED", "meta":"PLAYERATTR", "type":"local", "score":6},
		{"name":"PLAYERATTR.SCORE", "caption":"SCORE", "value":"PLAYERATTR.SCORE", "meta":"PLAYERATTR", "type":"local", "score":6},
		{"name":"PLAYERATTR.SNEAK_SPEED", "caption":"SNEAK_SPEED", "value":"PLAYERATTR.SNEAK_SPEED", "meta":"PLAYERATTR", "type":"local", "score":6},
		{"name":"PLAYERATTR.SWIN_SPEED", "caption":"SWIN_SPEED", "value":"PLAYERATTR.SWIN_SPEED", "meta":"PLAYERATTR", "type":"local", "score":6},
		{"name":"PLAYERATTR.WALK_SPEED", "caption":"WALK_SPEED", "value":"PLAYERATTR.WALK_SPEED", "meta":"PLAYERATTR", "type":"local", "score":6},
		{"name":"PLAYERATTR_ENABLE.ENABLE_ATTACK", "caption":"ENABLE_ATTACK", "value":"PLAYERATTR_ENABLE.ENABLE_ATTACK", "meta":"PLAYERATTR_ENABLE", "type":"local", "score":6},
		{"name":"PLAYERATTR_ENABLE.ENABLE_BEATTACKED", "caption":"ENABLE_BEATTACKED", "value":"PLAYERATTR_ENABLE.ENABLE_BEATTACKED", "meta":"PLAYERATTR_ENABLE", "type":"local", "score":6},
		{"name":"PLAYERATTR_ENABLE.ENABLE_BEKILLED", "caption":"ENABLE_BEKILLED", "value":"PLAYERATTR_ENABLE.ENABLE_BEKILLED", "meta":"PLAYERATTR_ENABLE", "type":"local", "score":6},
		{"name":"PLAYERATTR_ENABLE.ENABLE_DEATHDROPITEM", "caption":"ENABLE_DEATHDROPITEM", "value":"PLAYERATTR_ENABLE.ENABLE_DEATHDROPITEM", "meta":"PLAYERATTR_ENABLE", "type":"local", "score":6},
		{"name":"PLAYERATTR_ENABLE.ENABLE_DESTROYBLOCK", "caption":"ENABLE_DESTROYBLOCK", "value":"PLAYERATTR_ENABLE.ENABLE_DESTROYBLOCK", "meta":"PLAYERATTR_ENABLE", "type":"local", "score":6},
		{"name":"PLAYERATTR_ENABLE.ENABLE_DISCARDITEM", "caption":"ENABLE_DISCARDITEM", "value":"PLAYERATTR_ENABLE.ENABLE_DISCARDITEM", "meta":"PLAYERATTR_ENABLE", "type":"local", "score":6},
		{"name":"PLAYERATTR_ENABLE.ENABLE_MOVE", "caption":"ENABLE_MOVE", "value":"PLAYERATTR_ENABLE.ENABLE_MOVE", "meta":"PLAYERATTR_ENABLE", "type":"local", "score":6},
		{"name":"PLAYERATTR_ENABLE.ENABLE_OPERATEBLOCK", "caption":"ENABLE_OPERATEBLOCK", "value":"PLAYERATTR_ENABLE.ENABLE_OPERATEBLOCK", "meta":"PLAYERATTR_ENABLE", "type":"local", "score":6},
		{"name":"PLAYERATTR_ENABLE.ENABLE_PICKUP", "caption":"ENABLE_PICKUP", "value":"PLAYERATTR_ENABLE.ENABLE_PICKUP", "meta":"PLAYERATTR_ENABLE", "type":"local", "score":6},
		{"name":"PLAYERATTR_ENABLE.ENABLE_PLACEBLOCK", "caption":"ENABLE_PLACEBLOCK", "value":"PLAYERATTR_ENABLE.ENABLE_PLACEBLOCK", "meta":"PLAYERATTR_ENABLE", "type":"local", "score":6},
		{"name":"PLAYERATTR_ENABLE.ENABLE_USEITEM", "caption":"ENABLE_USEITEM", "value":"PLAYERATTR_ENABLE.ENABLE_USEITEM", "meta":"PLAYERATTR_ENABLE", "type":"local", "score":6},
		{"name":"PLAYERATTR_ENABLE.ENABLE_VEHICLEAUTOFORWARD", "caption":"ENABLE_VEHICLEAUTOFORWARD", "value":"PLAYERATTR_ENABLE.ENABLE_VEHICLEAUTOFORWARD", "meta":"PLAYERATTR_ENABLE", "type":"local", "score":6},
		{"name":"PLAYERATTR_ITEM.ITEM_DISABLE_DROP", "caption":"ITEM_DISABLE_DROP", "value":"PLAYERATTR_ITEM.ITEM_DISABLE_DROP", "meta":"PLAYERATTR_ITEM", "type":"local", "score":6},
		{"name":"PLAYERATTR_ITEM.ITEM_DISABLE_THROW", "caption":"ITEM_DISABLE_THROW", "value":"PLAYERATTR_ITEM.ITEM_DISABLE_THROW", "meta":"PLAYERATTR_ITEM", "type":"local", "score":6},
		{"name":"PLAYERMOTION.DOWN", "caption":"DOWN", "value":"PLAYERMOTION.DOWN", "meta":"PLAYERMOTION", "type":"local", "score":6},
		{"name":"PLAYERMOTION.FALL", "caption":"FALL", "value":"PLAYERMOTION.FALL", "meta":"PLAYERMOTION", "type":"local", "score":6},
		{"name":"PLAYERMOTION.FALL_GROUND", "caption":"FALL_GROUND", "value":"PLAYERMOTION.FALL_GROUND", "meta":"PLAYERMOTION", "type":"local", "score":6},
		{"name":"PLAYERMOTION.JUMP", "caption":"JUMP", "value":"PLAYERMOTION.JUMP", "meta":"PLAYERMOTION", "type":"local", "score":6},
		{"name":"PLAYERMOTION.JUMP_TWICE", "caption":"JUMP_TWICE", "value":"PLAYERMOTION.JUMP_TWICE", "meta":"PLAYERMOTION", "type":"local", "score":6},
		{"name":"PLAYERMOTION.RUN", "caption":"RUN", "value":"PLAYERMOTION.RUN", "meta":"PLAYERMOTION", "type":"local", "score":6},
		{"name":"PLAYERMOTION.SNEAK", "caption":"SNEAK", "value":"PLAYERMOTION.SNEAK", "meta":"PLAYERMOTION", "type":"local", "score":6},
		{"name":"PLAYERMOTION.STATIC", "caption":"STATIC", "value":"PLAYERMOTION.STATIC", "meta":"PLAYERMOTION", "type":"local", "score":6},
		{"name":"PLAYERMOTION.TURNBACK", "caption":"TURNBACK", "value":"PLAYERMOTION.TURNBACK", "meta":"PLAYERMOTION", "type":"local", "score":6},
		{"name":"PLAYERMOTION.UP", "caption":"UP", "value":"PLAYERMOTION.UP", "meta":"PLAYERMOTION", "type":"local", "score":6},
		{"name":"PLAYERMOTION.WALK", "caption":"WALK", "value":"PLAYERMOTION.WALK", "meta":"PLAYERMOTION", "type":"local", "score":6},
		{"name":"RESLIBTYPE.BLOCK", "caption":"BLOCK", "value":"RESLIBTYPE.BLOCK", "meta":"RESLIBTYPE", "type":"local", "score":6},
		{"name":"RESLIBTYPE.ITEM", "caption":"ITEM", "value":"RESLIBTYPE.ITEM", "meta":"RESLIBTYPE", "type":"local", "score":6},
		{"name":"RESLIBTYPE.MONSTER", "caption":"MONSTER", "value":"RESLIBTYPE.MONSTER", "meta":"RESLIBTYPE", "type":"local", "score":6},
		{"name":"RESLIBTYPE.NONE", "caption":"NONE", "value":"RESLIBTYPE.NONE", "meta":"RESLIBTYPE", "type":"local", "score":6},
		{"name":"RESLIBTYPE.PARTICLE", "caption":"PARTICLE", "value":"RESLIBTYPE.PARTICLE", "meta":"RESLIBTYPE", "type":"local", "score":6},
		{"name":"RESLIBTYPE.SOUND", "caption":"SOUND", "value":"RESLIBTYPE.SOUND", "meta":"RESLIBTYPE", "type":"local", "score":6},
		{"name":"TEAMATTR.PLAYER_NUM", "caption":"PLAYER_NUM", "value":"TEAMATTR.PLAYER_NUM", "meta":"TEAMATTR", "type":"local", "score":6},
		{"name":"TEAMATTR.SCORE", "caption":"SCORE", "value":"TEAMATTR.SCORE", "meta":"TEAMATTR", "type":"local", "score":6},
		{"name":"TEAM_RESULTS.TEAM_RESULTS_DOGFALL", "caption":"TEAM_RESULTS_DOGFALL", "value":"TEAM_RESULTS.TEAM_RESULTS_DOGFALL", "meta":"TEAM_RESULTS", "type":"local", "score":6},
		{"name":"TEAM_RESULTS.TEAM_RESULTS_LOSE", "caption":"TEAM_RESULTS_LOSE", "value":"TEAM_RESULTS.TEAM_RESULTS_LOSE", "meta":"TEAM_RESULTS", "type":"local", "score":6},
		{"name":"TEAM_RESULTS.TEAM_RESULTS_NONE", "caption":"TEAM_RESULTS_NONE", "value":"TEAM_RESULTS.TEAM_RESULTS_NONE", "meta":"TEAM_RESULTS", "type":"local", "score":6},
		{"name":"TEAM_RESULTS.TEAM_RESULTS_WIN", "caption":"TEAM_RESULTS_WIN", "value":"TEAM_RESULTS.TEAM_RESULTS_WIN", "meta":"TEAM_RESULTS", "type":"local", "score":6},
		{"name":"TerrainType.TERRAIN_FLAT", "caption":"TERRAIN_FLAT", "value":"TerrainType.TERRAIN_FLAT", "meta":"TerrainType", "type":"local", "score":6},
		{"name":"TerrainType.TERRAIN_NORMAL", "caption":"TERRAIN_NORMAL", "value":"TerrainType.TERRAIN_NORMAL", "meta":"TerrainType", "type":"local", "score":6},
		{"name":"VIEWPORTTYPE.BACKVIEW", "caption":"BACKVIEW", "value":"VIEWPORTTYPE.BACKVIEW", "meta":"VIEWPORTTYPE", "type":"local", "score":6},
		{"name":"VIEWPORTTYPE.CUSTOMVIEW", "caption":"CUSTOMVIEW", "value":"VIEWPORTTYPE.CUSTOMVIEW", "meta":"VIEWPORTTYPE", "type":"local", "score":6},
		{"name":"VIEWPORTTYPE.FRONTVIEW", "caption":"FRONTVIEW", "value":"VIEWPORTTYPE.FRONTVIEW", "meta":"VIEWPORTTYPE", "type":"local", "score":6},
		{"name":"VIEWPORTTYPE.MAINVIEW", "caption":"MAINVIEW", "value":"VIEWPORTTYPE.MAINVIEW", "meta":"VIEWPORTTYPE", "type":"local", "score":6},
		{"name":"VIEWPORTTYPE.TOPVIEW", "caption":"TOPVIEW", "value":"VIEWPORTTYPE.TOPVIEW", "meta":"VIEWPORTTYPE", "type":"local", "score":6},
		{"name":"WEATHERSTATUS.RAIN", "caption":"RAIN", "value":"WEATHERSTATUS.RAIN", "meta":"WEATHERSTATUS", "type":"local", "score":6},
		{"name":"WEATHERSTATUS.SHINE", "caption":"SHINE", "value":"WEATHERSTATUS.SHINE", "meta":"WEATHERSTATUS", "type":"local", "score":6},
		{"name":"WEATHERSTATUS.SHINE_AND_RAIN", "caption":"SHINE_AND_RAIN", "value":"WEATHERSTATUS.SHINE_AND_RAIN", "meta":"WEATHERSTATUS", "type":"local", "score":6},
		{"name":"WorldType.OWTYPE_CREATE", "caption":"OWTYPE_CREATE", "value":"WorldType.OWTYPE_CREATE", "meta":"WorldType", "type":"local", "score":6},
		{"name":"WorldType.OWTYPE_CREATE_RUNGAME", "caption":"OWTYPE_CREATE_RUNGAME", "value":"WorldType.OWTYPE_CREATE_RUNGAME", "meta":"WorldType", "type":"local", "score":6},
		{"name":"WorldType.OWTYPE_EXTREMITY", "caption":"OWTYPE_EXTREMITY", "value":"WorldType.OWTYPE_EXTREMITY", "meta":"WorldType", "type":"local", "score":6},
		{"name":"WorldType.OWTYPE_FREEMODE", "caption":"OWTYPE_FREEMODE", "value":"WorldType.OWTYPE_FREEMODE", "meta":"WorldType", "type":"local", "score":6},
		{"name":"WorldType.OWTYPE_GAMEMAKER", "caption":"OWTYPE_GAMEMAKER", "value":"WorldType.OWTYPE_GAMEMAKER", "meta":"WorldType", "type":"local", "score":6},
		{"name":"WorldType.OWTYPE_GAMEMAKER_RUN", "caption":"OWTYPE_GAMEMAKER_RUN", "value":"WorldType.OWTYPE_GAMEMAKER_RUN", "meta":"WorldType", "type":"local", "score":6},
		{"name":"WorldType.OWTYPE_RECORD", "caption":"OWTYPE_RECORD", "value":"WorldType.OWTYPE_RECORD", "meta":"WorldType", "type":"local", "score":6},
		{"name":"WorldType.OWTYPE_SINGLE", "caption":"OWTYPE_SINGLE", "value":"WorldType.OWTYPE_SINGLE", "meta":"WorldType", "type":"local", "score":6},
	]
	return jsonObj
}
