from rest_framework_csv.renderers import CSVStreamingRenderer

class FileRenderCN(CSVStreamingRenderer):
    header = [
        'customer_name',
        'customer_city',
        'customer_address',
        'customer_contact',
        'customer_manager',
        'creater',
        'create_time',
        'update_time'
    ]
    labels = dict([
        ('customer_name', u'客户名称'),
        ('customer_city', u'客户城市'),
        ('customer_address', u'详细地址'),
        ('customer_contact', u'联系电话'),
        ('customer_manager', u'负责人'),
        ('creater', u'创建人'),
        ('create_time', u'创建时间'),
        ('update_time', u'更新时间'),
    ])

class FileRenderEN(CSVStreamingRenderer):
    header = [
        'customer_name',
        'customer_city',
        'customer_address',
        'customer_contact',
        'customer_manager',
        'creater',
        'create_time',
        'update_time'
    ]
    labels = dict([
        ('customer_name', u'Customer Name'),
        ('customer_city', u'Customer City'),
        ('customer_address', u'Customer Address'),
        ('customer_contact', u'Customer Contact'),
        ('customer_manager', u'Customer Manager'),
        ('creater', u'Creater'),
        ('create_time', u'Create Time'),
        ('update_time', u'Update Time'),
    ])
