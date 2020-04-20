/*
 *正则工具类RegexTool
 *可以返回是否匹配的布尔值或者匹配结果数组，可自由切换
*/
class RegexTool{
	private $validate = array( //预定义正则数组
		'require'	=>	'/.+/',
		'email'		=>	'/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/',
		'url'		=>	'/^http(s?):\/\/(?:[A-za-z0-9-]+\.)+[A-za-z]{2,4}(?:[\/\?#][\/=\?%\-&~`@[\]\':+!\.#\w]*)?$/',
		'currency'	=>	'/^\d+(\.\d+)?$/',
		'number'	=>	'/^\d+$/',
		'zip'		=>	'/^\d{6}$/',
		'integer'	=> 	'/^[-\+]?\d+$/',
		'double'	=>	'/^[-\+]?\d+(\.\d+)?$/',
		'english'	=>	'/^[A-Za-z]+$/',
		'qq'		=>	'/^\d{5,11}$/',
		'mobile'	=>	'/^1[334578]\d{9}$/',
	);
	private $returnMatchType = false; //返回结果类型, 默认返回是否匹配的布尔值
	private $fixMode = null; //修饰符，默认为空
	private $matches = array(); //返回结果数组
	private $isMatch = false; //返回布尔值
	
	//构造函数
	//可以在构造对象时传入返回类型和修饰符
	public function __construct($returnMatchType = false, $fixMode = null){
		$this->returnMatchType = $returnMatchType;
		$this->fixMode = $fixMode;
	}
	
	//匹配的具体操作封装成私有方法，供其他方法调用
	private function regex($pattern, $subject){
		//根据传入的参数是否在$this->validate数组中，来决定是用数组中预定义的正则还是用用户自定义的正则
		if(array_key_exists(strtolower($pattern), $this->validate)){
			$pattern = $this->validate[$pattern].$this->fixMode;
		}
		//根据$this->returnMatchType来判断返回的结果类型
		if($this->returnMatchType){
			preg_match_all($pattern, $subject, $this->matches);
			return $this->matches;
		}else{
			$this->isMatch = preg_match($pattern, $subject) === 1;
			return $this->isMatch;
		}
	}
	
	//切换返回类型
	//传入参数为空则切换，否则修改返回类型为传入的布尔值
	public function toggleReturnType($flag = null){
		if(empty($flag)){
			$this->returnMatchType = !$this->returnMatchType;
		}else{
			$this->returnMatchType = is_bool($flag) ? $flag : (bool)$flag;
		}
	}
	
	//设置修饰符
	public function setFixMode($fixMode){
		$this->fixMode = $fixMode;
	}
	
	//非空验证
	public function noEmpty($str){
		return $this->regex('require', $str);
	}
	
	//邮箱验证
	public function isEmail($email){
		return $this->regex('email', $email);
	}
	
	//手机号验证
	public function isMobile($mobile){
		return $this->regex('mobile', $mobile);
	}
	
	//其他验证方法
	//...
	
	//用户定义的正则验证
	public function check($pattern, $subject){
		return $this->regex($pattern, $subject);
	}
}