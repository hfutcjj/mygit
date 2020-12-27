/*
 简易模板引擎
 >>文件结构如下
 template 			//模板文件夹
 	source 				//源文件夹
 		index.html			//源文件
 	compiled			//编译后的文件放在这个文件夹里
 	template.class.php	//模板类文件
 test.php			//测试文件
 >>功能
 把 {#  $test #} 编译成 <?php echo $this->varPool['test']; ?>;
 >>知识点
 1, 匹配{#  $test #}的正则为 '/\{#\s*\$([a-zA-Z_]\w*)\s*#\}/';
 2, 读文件内容
	$content = file_get_contents($filename);
 3, 写到文件
	file_put_contents($filename, $content);
 4, 由于左右边界符可由用户输入，可能会包含特殊字符，所以应该用
	preg_quote()对用户的输入进行转义;
 5, 取当前文件所在的目录名
	$dirname = dirname(__FILE__);
 6, 将window文件结构的分隔符\替换成/以兼容Linux：
	$dirname = str_replace('\\', '/', $dirname);
*/

//template.class.php
<?php
class template{
	private $sourceDir; //源文件夹
	private $compiledDir; //编译后文件夹
	private $leftTag = '{#'; //左边界符
	private $rightTag = '#}'; //右边界符
	private $currentFilename; //当前处理的文件名
	private $outputHtml; //当前处理的文件内容
	private $valPool = array(); //替换的文本数组
	
	//构造函数
	//构造模板对象时须传入源文件夹和编译后文件夹，左右边界符可选
	public function __construct($sourceDir, $compiledDir, $leftTag = null, $rightTag = null){
		$this->sourceDir = $sourceDir;
		$this->compiledDir = $compiledDir;
		if(!empty($leftTag)){
			$this->leftTag = $leftTag;
		}
		if(!empty($rightTag)){
			$this->rightTag = $rightTag;
		}
	}
	
	//初始化替换的文本库
	public function assign($key, $value){
		$this->valPool[$key] = $value;
	}
	
	//取某个文本的替换文本
	public function getVar($key){
		return $this->valPool[$key];
	}
	
	//加载源文件
	public function loadSourceFile($filename, $ext = '.html'){
		$this->currentFilename = $filename;
		$fullname = $this->sourceDir.$filename.$ext;
		$this->outputHtml = file_get_contents($fullname);
	}
	
	//编译
	public function compile(){
		$pattern = '/'.preg_quote($this->leftTag).
			'\s*\$([a-zA-Z_]\w*)\s*'.
			preg_quote($this->rightTag).'/';
		$replacement = '<?php echo $this->getVar("$1"); ?>';
		$this->outputHtml = preg_replace($pattern, $replacement, $this->outputHtml);
		$compiledFilename = $this->compiledDir.md5($this->currentFilename).'.html';
		file_put_contents($compiledFilename, $this->outputHtml);
	}
	
	//显示
	public function display(){
		include_once $this->compiledDir.md5($this->currentFilename).'.html';
	}
}
?>

//test.php
<?php
require_once 'template/template.class.php';
$dirname = dirname(__FILE__);
$dirname = str_replace('\\', '/', $dirname);
$temp = new template($dirname.'/template/source/', $dirname.'/template/compiled/');
$temp->assign('pagetitle', '页面标题');
$temp->assign('test', '测试');
$temp->loadSourceFile('index');
$temp->compile();
$temp->display();
?>

//index.html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>{#$pagetitle#}</title>
	</head>
	<body>
		模板引擎测试：{# $test	#}
	</body>
</html>

//编译后文件
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title><?php echo $this->getVar("pagetitle"); ?></title>
	</head>
	<body>
		模板引擎测试：<?php echo $this->getVar("test"); ?>
	</body>
</html>