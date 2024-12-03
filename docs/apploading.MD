# 1. index.html:

index.html  (npm start, cds watch 都会直接跳到 fiori lanchpad, 也就是index.html内容。)

vs

fiori-apps.html 则会默认打开 http://localhost:4004/  ， 这估计是CDS 或者其它的引导程序   默认打开index.html 的缘故

# 2. models.js:

models.js under model can not be deleted => it serves for this.setModel(models.createDeviceModel(), "device");


# 3. formatter
从fiori launchpad 进入 app, 找不到 formater, 估计是fiori launchpad 的配置有些问题；
自己写的formater 和  Property Formatting using data type 都有问题
不止一处出现这个问题，暂时搁置，先做优先级高的练习

# 4. Aggregation Binding Using a Factory Function
如果control 中间定义了 <dependents> sub_controls ，那么oContext 默认只会带过来 sub_controls 用到的字段；
（目前测试下来是这样，后期如果有新发现再更新）
解决办法： 把所有Factory Fucntion里面需要的字段都定义在某个propery 里面，然后用 formmater来控制需要显示的字段
		intro="{
			parts: [
				{path: 'products>UnitsInStock'},
				{path: 'products>Discontinued'}
			],
			formatter: '.formatIntro'
		}"
	  formatIntro(UnitsInStock, Discontinued){
			return '';
	  },

