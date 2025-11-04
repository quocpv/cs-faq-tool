import { SearchResult, SearchParams } from '../types';

const mockData: SearchResult[] = [
  {
    id: 'E_CB_002',
    title: 'Giao dịch có áp mã ưu đãi không được hoàn tiền - Lỗi Cashback',
    tags: {
      category: 'Khuyến mãi',
      match: 31,
      level: 'L1 - Thấp'
    },
    cause: [
      'Các chương trình hoàn tiền có điều kiện: Chương trình không áp dụng đồng thời với các voucher/ưu đãi khác.',
      'CS kiểm tra thấy giao dịch có áp dụng mã ưu đãi, voucher khác.'
    ],
    handling: [
      'Nhận biết: Tại cột Mã voucher trong Tool TPE có thông tin khuyến mãi.',
      'CS từ chối theo thể lệ chương trình'
    ],
    note: [
      'Có một số chương trình cashback vẫn kết hợp đồng thời nhiều loại ưu đãi, tuy nhiên CS cần kiểm tra rõ trong TnC có đề cập vấn đề này hay không?',
      'Nếu TnC ghi áp dụng đồng thời nhiều khuyến mãi và giao dịch KH thỏa điều kiện, CS cần ghi nhận kiểm tra thêm với team KM.'
    ],
    templates: {
      neutral: `Chào bạn,
Cám ơn bạn đã quan tâm và sử dụng dịch vụ của chúng tôi.

Qua kiểm tra giao dịch thanh toán [tên dịch vụ] của bạn không được hoàn tiền chiết khấu do bạn đã có áp dụng khuyến mãi [giảm giá/sử dụng giảm giá từ ví] ở bước thanh toán.

Theo thể lệ, chương trình hoàn chiết khấu không áp dụng đồng thời khi giao dịch của khách hàng có sử dụng khuyến mãi giảm giá khác.

Ngoài ra, chúng tôi cũng đang có nhiều chương trình khuyến mãi khác phù hợp với tài khoản của bạn. Bạn vui lòng truy cập mục Ưu đãi để tham khảo thể lệ và tham gia cùng chúng tôi.

Mong bạn thông cảm vì sự bất tiện này. Chân thành cảm ơn bạn.`,
      calming: `Chào bạn,
Chúng tôi rất tiếc về trải nghiệm chưa tốt mà bạn gặp phải.

Chúng tôi đã kiểm tra và nhận thấy giao dịch của bạn không đủ điều kiện nhận hoàn tiền vì đã áp dụng một mã khuyến mãi khác. Theo quy định, các chương trình ưu đãi không được áp dụng đồng thời.

Tuy nhiên, chúng tôi luôn có rất nhiều chương trình khuyến mãi hấp dẫn khác. Bạn có thể truy cập mục 'Ưu đãi' để tìm những ưu đãi phù hợp nhất cho mình.

Một lần nữa, chúng tôi xin lỗi vì sự bất tiện này và rất mong bạn sẽ tiếp tục tin tưởng và sử dụng dịch vụ. Chân thành cảm ơn bạn.`
    }
  },
  {
    id: 'T_ACC_015',
    title: 'Không thể đăng nhập vào tài khoản - Lỗi xác thực',
    tags: {
      category: 'Tài khoản',
      match: 78,
      level: 'L2 - Trung bình'
    },
    cause: [
      'Người dùng nhập sai mật khẩu quá nhiều lần.',
      'Tài khoản bị tạm khóa vì lý do bảo mật.',
      'Lỗi kết nối mạng phía người dùng.'
    ],
    handling: [
      'Hướng dẫn người dùng sử dụng tính năng "Quên mật khẩu".',
      'Kiểm tra trạng thái tài khoản trong hệ thống admin.',
      'Nếu tài khoản bị khóa, tiến hành mở khóa sau khi xác minh danh tính.'
    ],
    note: [
        'Luôn xác minh ít nhất 2 thông tin cá nhân trước khi thực hiện bất kỳ thay đổi nào trên tài khoản khách hàng.'
    ],
    templates: {
      neutral: `Chào bạn,
Cảm ơn bạn đã liên hệ với chúng tôi.

Về vấn đề đăng nhập, bạn vui lòng thử sử dụng chức năng "Quên mật khẩu" để đặt lại mật khẩu mới. Nếu vẫn không thể đăng nhập, vui lòng cung cấp thêm thông tin [Số điện thoại, CMND/CCCD] để chúng tôi hỗ trợ kiểm tra và xử lý.

Mong nhận được phản hồi từ bạn.`,
      calming: `Chào bạn,
Chúng tôi hiểu rằng việc không thể đăng nhập tài khoản gây ra nhiều bất tiện và rất xin lỗi về điều này.

Để đảm bảo an toàn cho tài khoản của bạn, hệ thống có thể đã tạm khóa do phát hiện hoạt động bất thường. Bạn vui lòng thử chức năng "Quên mật khẩu" trước. Nếu không thành công, xin hãy cung cấp cho chúng tôi [Số điện thoại, CMND/CCCD] để chúng tôi có thể ưu tiên hỗ trợ bạn ngay lập tức.

Cảm ơn sự hợp tác của bạn.`
    }
  },
  {
    id: 'P_PAY_005',
    title: 'Thanh toán bị trừ tiền hai lần cho một đơn hàng',
    tags: {
      category: 'Thanh toán',
      match: 85,
      level: 'L2 - Trung bình'
    },
    cause: [
      'Lỗi hệ thống tạm thời từ phía đối tác thanh toán.',
      'Người dùng thao tác thanh toán lại quá nhanh khi giao dịch trước chưa hoàn tất.',
      'Kết nối mạng không ổn định tại thời điểm giao dịch.'
    ],
    handling: [
      'Kiểm tra lịch sử giao dịch trên hệ thống TPE để xác nhận giao dịch trùng lặp.',
      'Nếu có giao dịch trùng lặp thành công, tạo yêu cầu hoàn tiền cho khách hàng đối với giao dịch thứ hai.',
      'Thông báo khách hàng thời gian dự kiến nhận lại tiền (thường là 3-5 ngày làm việc tùy ngân hàng).'
    ],
    note: [
      'Chỉ hoàn tiền khi xác nhận cả hai giao dịch đều có trạng thái "Thành công".',
      'Nếu một giao dịch thất bại, tiền sẽ được ngân hàng tự động hoàn lại, không cần can thiệp.'
    ],
    templates: {
      neutral: `Chào bạn,
Cảm ơn bạn đã thông báo về vấn đề giao dịch.

Chúng tôi đã kiểm tra và ghi nhận giao dịch [Mã giao dịch] của bạn đã bị trừ tiền hai lần. Chúng tôi đã tiến hành tạo yêu cầu hoàn lại số tiền bị trừ không chính xác vào tài khoản của bạn.

Thời gian hoàn tiền dự kiến là từ 3-5 ngày làm việc, không kể cuối tuần và ngày lễ. Bạn vui lòng kiểm tra lại tài khoản sau thời gian trên.

Xin lỗi bạn vì sự cố không mong muốn này.`,
      calming: `Chào bạn,
Chúng tôi rất xin lỗi về sự cố trừ tiền hai lần mà bạn gặp phải, điều này chắc hẳn đã gây ra lo lắng cho bạn.

Chúng tôi đã nhanh chóng kiểm tra và xác nhận có một giao dịch bị trùng lặp. Đừng lo lắng, chúng tôi đã ngay lập tức xử lý yêu cầu hoàn lại số tiền [Số tiền] cho bạn. Tiền sẽ được chuyển về tài khoản của bạn trong vòng 3-5 ngày làm việc tới.

Chúng tôi thành thật xin lỗi vì trải nghiệm không tốt này và cảm ơn sự kiên nhẫn của bạn.`
    }
  },
  {
    id: 'A_APP_031',
    title: 'Ứng dụng bị văng, không thể mở được',
    tags: {
      category: 'Ứng dụng',
      match: 65,
      level: 'L1 - Thấp'
    },
    cause: [
      'Phiên bản ứng dụng cũ, không tương thích với hệ điều hành mới.',
      'Bộ nhớ cache của ứng dụng bị lỗi.',
      'Thiết bị không đủ bộ nhớ trống.'
    ],
    handling: [
      'Hướng dẫn khách hàng khởi động lại thiết bị.',
      'Hướng dẫn khách hàng xóa bộ nhớ cache của ứng dụng.',
      'Yêu cầu khách hàng kiểm tra và cập nhật ứng dụng lên phiên bản mới nhất từ App Store hoặc Google Play.',
      'Nếu vẫn không được, hướng dẫn khách hàng gỡ và cài đặt lại ứng dụng (lưu ý sao lưu dữ liệu nếu cần).'
    ],
    note: [
      'Ghi nhận thông tin thiết bị (ví dụ: iPhone 13, iOS 16.5) và phiên bản ứng dụng của khách để báo cáo cho đội kỹ thuật nếu vấn đề xảy ra trên diện rộng.'
    ],
    templates: {
      neutral: `Chào bạn,
Cảm ơn bạn đã phản hồi về tình trạng ứng dụng.

Để khắc phục, bạn vui lòng thử các bước sau:
1. Khởi động lại điện thoại.
2. Xóa bộ nhớ đệm (cache) của ứng dụng trong phần cài đặt của máy.
3. Vào App Store/Google Play để cập nhật ứng dụng lên phiên bản mới nhất.

Nếu vẫn gặp sự cố, bạn vui lòng gỡ ứng dụng và cài đặt lại.

Mong bạn thông cảm và thực hiện theo hướng dẫn.`,
      calming: `Chào bạn,
Chúng tôi rất tiếc khi bạn gặp phải sự cố không thể mở được ứng dụng. Chúng tôi hiểu điều này rất bất tiện.

Bạn có thể dành chút thời gian thử một vài bước đơn giản sau đây nhé: đầu tiên là khởi động lại điện thoại, sau đó vào phần cài đặt để xóa cache của ứng dụng, và cuối cùng là kiểm tra cập nhật trên cửa hàng ứng dụng. Thường thì các bước này sẽ giải quyết được vấn đề.

Nếu sự cố vẫn tiếp diễn, xin hãy báo lại cho chúng tôi kèm thông tin dòng máy bạn đang dùng để chúng tôi có thể hỗ trợ bạn tốt hơn. Cảm ơn bạn rất nhiều.`
    }
  },
  {
    id: 'M_MER_011',
    title: 'Cửa hàng báo không nhận được tiền thanh toán',
    tags: {
      category: 'Merchant',
      match: 92,
      level: 'L3 - Cao'
    },
    cause: [
      'Kết nối mạng tại cửa hàng (merchant) không ổn định tại thời điểm quét mã.',
      'Trạng thái giao dịch cập nhật chậm trên hệ thống của merchant.',
      'Giao dịch bị treo do hệ thống ngân hàng xử lý chậm.'
    ],
    handling: [
      'Yêu cầu khách hàng cung cấp mã giao dịch (Transaction ID) và ảnh chụp màn hình giao dịch thành công.',
      'Kiểm tra trạng thái giao dịch trên hệ thống nội bộ (TPE).',
      'Nếu giao dịch "Thành công": Cung cấp bằng chứng cho khách hàng để xác nhận với merchant.',
      'Nếu giao dịch "Thất bại" hoặc "Đang xử lý": Thông báo cho khách hàng rằng giao dịch chưa thành công và tiền sẽ được hoàn tự động nếu đã bị trừ.'
    ],
    note: [
      'Tuyệt đối không xác nhận thành công nếu trạng thái trên TPE không phải là "Successful".',
      'Trường hợp khẩn cấp hoặc tranh chấp kéo dài, cần liên hệ trực tiếp với bộ phận hỗ trợ đối tác (Partner Support) để giải quyết.'
    ],
    templates: {
      neutral: `Chào bạn,
Về giao dịch của bạn tại [Tên cửa hàng], chúng tôi đã kiểm tra và xác nhận trạng thái giao dịch [Mã giao dịch] là [Thành công/Thất bại].

- Nếu Thành công: Bạn vui lòng đưa lại màn hình này cho nhân viên cửa hàng để đối soát.
- Nếu Thất bại: Giao dịch không thành công. Nếu tài khoản của bạn đã bị trừ tiền, số tiền sẽ được hoàn lại tự động trong vài phút. Bạn vui lòng kiểm tra lại số dư.

Cảm ơn bạn đã sử dụng dịch vụ của chúng tôi.`,
      calming: `Chào bạn,
Chúng tôi hiểu bạn đang cảm thấy không thoải mái khi cửa hàng báo chưa nhận được thanh toán. Bạn hãy yên tâm nhé, chúng tôi sẽ kiểm tra ngay.

Sau khi kiểm tra, chúng tôi thấy rằng giao dịch của bạn đã ở trạng thái [Thành công]. Có thể do đường truyền mạng nên hệ thống của cửa hàng cập nhật hơi chậm một chút. Bạn có thể đưa tin nhắn này cho nhân viên để xác nhận lại nhé.

Chúng tôi xin lỗi vì sự bất tiện này và cảm ơn bạn đã kiên nhẫn.`
    }
  }
];

export const performSearch = (params: SearchParams): Promise<SearchResult[]> => {
  console.log('Performing search with:', params);
  return new Promise(resolve => {
    setTimeout(() => {
      if (!params.query.trim()) {
        resolve([]);
        return;
      }
      const filteredData = mockData.filter(item => 
        item.title.toLowerCase().includes(params.query.toLowerCase()) ||
        item.tags.category.toLowerCase().includes(params.query.toLowerCase())
      );
      resolve(filteredData);
    }, 1000); 
  });
};