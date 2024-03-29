USE [master]
GO
/****** Object:  Database [QLPHONGKHAM]    Script Date: 18/01/2024 13:17:38 ******/
drop database [QLPHONGKHAM]
CREATE DATABASE [QLPHONGKHAM]

ALTER DATABASE [QLPHONGKHAM] SET COMPATIBILITY_LEVEL = 100
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [QLPHONGKHAM].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [QLPHONGKHAM] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [QLPHONGKHAM] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [QLPHONGKHAM] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [QLPHONGKHAM] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [QLPHONGKHAM] SET ARITHABORT OFF 
GO
ALTER DATABASE [QLPHONGKHAM] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [QLPHONGKHAM] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [QLPHONGKHAM] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [QLPHONGKHAM] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [QLPHONGKHAM] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [QLPHONGKHAM] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [QLPHONGKHAM] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [QLPHONGKHAM] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [QLPHONGKHAM] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [QLPHONGKHAM] SET  ENABLE_BROKER 
GO
ALTER DATABASE [QLPHONGKHAM] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [QLPHONGKHAM] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [QLPHONGKHAM] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [QLPHONGKHAM] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [QLPHONGKHAM] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [QLPHONGKHAM] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [QLPHONGKHAM] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [QLPHONGKHAM] SET RECOVERY FULL 
GO
ALTER DATABASE [QLPHONGKHAM] SET  MULTI_USER 
GO
ALTER DATABASE [QLPHONGKHAM] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [QLPHONGKHAM] SET DB_CHAINING OFF 
GO
ALTER DATABASE [QLPHONGKHAM] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [QLPHONGKHAM] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [QLPHONGKHAM] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [QLPHONGKHAM] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
EXEC sys.sp_db_vardecimal_storage_format N'QLPHONGKHAM', N'ON'
GO
ALTER DATABASE [QLPHONGKHAM] SET QUERY_STORE = ON
GO
ALTER DATABASE [QLPHONGKHAM] SET QUERY_STORE (OPERATION_MODE = READ_WRITE, CLEANUP_POLICY = (STALE_QUERY_THRESHOLD_DAYS = 30), DATA_FLUSH_INTERVAL_SECONDS = 900, INTERVAL_LENGTH_MINUTES = 60, MAX_STORAGE_SIZE_MB = 1000, QUERY_CAPTURE_MODE = AUTO, SIZE_BASED_CLEANUP_MODE = AUTO, MAX_PLANS_PER_QUERY = 200, WAIT_STATS_CAPTURE_MODE = ON)
GO
USE [QLPHONGKHAM]
GO
/****** Object:  UserDefinedFunction [dbo].[GetLatestDoctorCode]    Script Date: 18/01/2024 13:17:38 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE FUNCTION [dbo].[GetLatestDoctorCode]()
RETURNS NVARCHAR(10)
AS
BEGIN
    DECLARE @latestDoctorCode NVARCHAR(10)

    -- Sử dụng SELECT TOP 1 để lấy mã bác sĩ mới nhất
    SELECT @latestDoctorCode = MABACSI
    FROM BACSI
    ORDER BY ID DESC
    OFFSET 0 ROWS FETCH NEXT 1 ROWS ONLY

    RETURN @latestDoctorCode
END
GO
/****** Object:  UserDefinedFunction [dbo].[GetLatestPharCode]    Script Date: 18/01/2024 13:17:38 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE FUNCTION [dbo].[GetLatestPharCode]()
RETURNS NVARCHAR(10)
AS
BEGIN
    DECLARE @latestPharCode NVARCHAR(10);

    -- Sử dụng SELECT TOP 1 để lấy mã dược sĩ mới nhất
    SELECT @latestPharCode = MADUOCSI
    FROM DUOCSI
    ORDER BY ID DESC
    OFFSET 0 ROWS FETCH NEXT 1 ROWS ONLY;

    RETURN @latestPharCode;
END;
GO
/****** Object:  UserDefinedFunction [dbo].[GetNumericFromCode]    Script Date: 18/01/2024 13:17:38 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE FUNCTION [dbo].[GetNumericFromCode]
(
    @inputString NVARCHAR(10)
)
RETURNS NVARCHAR(10)
AS
BEGIN
    DECLARE @numericPart NVARCHAR(10)
    DECLARE @firstDigitPosition INT = PATINDEX('%[0-9]%', @inputString)


    IF @firstDigitPosition > 0
    BEGIN
        SET @numericPart = SUBSTRING(@inputString, @firstDigitPosition, LEN(@inputString))
    END
    ELSE
        SET @numericPart = NULL

    RETURN @numericPart
END
GO
/****** Object:  Table [dbo].[ADMIN]    Script Date: 18/01/2024 13:17:38 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ADMIN](
	[MAADMIN] [nchar](4) NOT NULL,
	[HOTEN_ADMIN] [nvarchar](50) NOT NULL,
	[SDT_ADMIN] [char](10) NOT NULL,
	[EMAIL_ADMIN] [varchar](30) NULL,
	[USERNAME] [varchar](20) NOT NULL,
 CONSTRAINT [PK_ADMIN] PRIMARY KEY CLUSTERED 
(
	[MAADMIN] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[BACSI]    Script Date: 18/01/2024 13:17:38 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[BACSI](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[MABACSI] [char](10) NOT NULL,
	[HOTEN_BS] [nvarchar](50) NULL,
	[SDT_BS]  [char](10) UNIQUE,
	[EMAIL_BS] [varchar](30) NULL,
	[HOCHAM] [nvarchar](30) NULL,
	[LUONG] [money] NULL,
	[USERNAME] [varchar](20) NULL,
 CONSTRAINT [PK_BACSI] PRIMARY KEY CLUSTERED 
(
	[MABACSI] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[BENHNHAN]    Script Date: 18/01/2024 13:17:38 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[BENHNHAN](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[MABN]  AS ('BN'+right('00'+CONVERT([varchar](3),[ID]),(3))) PERSISTED NOT NULL,
	[HOTEN_BN] [nvarchar](50) NULL,
	[NGAYSINH] [date] NULL,
	[GIOITINH] [nvarchar](3) NULL,
	[SDT_BN] [char](10) NULL,
	[EMAIL_BN] [varchar](30) NULL,
	[DIACHI] [nvarchar](50) NULL,
	[CHONGCHIDINH] [nvarchar](30) NULL,
	[DIUNG] [nvarchar](30) NULL,
 CONSTRAINT [PK_YourTable] PRIMARY KEY CLUSTERED 
(
	[MABN] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[BENHSU]    Script Date: 18/01/2024 13:17:38 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[BENHSU](
	[MABN] [varchar](5) NOT NULL,
	[NGAYDIEUTRI] [date] NOT NULL,
	[MABACSI] [char](10) NULL,
	[CHANDOAN] [nvarchar](50) NULL,
	[TRIEUCHUNG] [nvarchar](50) NULL,
	[TRANGTHAI] [nvarchar](10) NULL,
	[TRANGTHAITHANHTOAN] [nvarchar](10) NULL,
	[TONGCHIPHI] [money] NULL,
 CONSTRAINT [PK_BENHSU] PRIMARY KEY CLUSTERED 
(
	[MABN] ASC,
	[NGAYDIEUTRI] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[CTDONTHUOC]    Script Date: 18/01/2024 13:17:38 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CTDONTHUOC](
	[MABN] [varchar](5) NOT NULL,
	[NGAYTAO] [date] NOT NULL,
	[MATHUOC] [char](4) NOT NULL,
	[SOLUONG] [int] NULL,
 CONSTRAINT [PK_CTDONTHUOC] PRIMARY KEY CLUSTERED 
(
	[MABN] ASC,
	[NGAYTAO] ASC,
	[MATHUOC] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[DANHGIA]    Script Date: 18/01/2024 13:17:38 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[DANHGIA](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[HOTEN] [nvarchar](50) NULL,
	[SDT] [char](10) NULL,
	[NOIDUNG] [nvarchar](50) NULL,
	[HAILONG] [int] NULL,
 CONSTRAINT [PK_DANHGIA] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[DUOCSI]    Script Date: 18/01/2024 13:17:38 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[DUOCSI](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[MADUOCSI] [char](10) NOT NULL,
	[HOTEN_DS] [nvarchar](50) NULL,
	[SDT_DS] [char](10) UNIQUE,
	[EMAIL_DS] [varchar](30) NULL,
	[HOCHAM] [nvarchar](30) NULL,
	[LUONG] [money] NULL,
	[USERNAME] [varchar](20) NULL,
 CONSTRAINT [PK_DUOCSI] PRIMARY KEY CLUSTERED 
(
	[MADUOCSI] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[LICHHEN]    Script Date: 18/01/2024 13:17:38 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[LICHHEN](
	[SDT] [char](10) NOT NULL,
	[NGAYKHAM] [date] NOT NULL,
	[BUOIKHAM] [nvarchar](10) NOT NULL,
	[MABACSI] [char](10) NULL,
	[TRANGTHAIHEN] [nvarchar](10) NULL,
	[HOTEN] [nvarchar](50) NULL,
	[EMAIL] [varchar](30) NULL,
	[GIOITINH] [nvarchar](3) NULL,
	[DIACHI] [nvarchar](50) NULL,
	[DICHVU] [nvarchar](50) NULL,
 CONSTRAINT [PK_LICHHEN_1] PRIMARY KEY CLUSTERED 
(
	[SDT] ASC,
	[NGAYKHAM] ASC,
	[BUOIKHAM] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TAIKHOAN]    Script Date: 18/01/2024 13:17:38 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TAIKHOAN](
	[USERNAME] [varchar](20) NOT NULL,
	[PASSWORDHASH] [binary](64) NOT NULL,
	[NGAYKHOITAO] [date] NOT NULL,
	[LOAITAIKHOAN] [nvarchar](30) NULL,
 CONSTRAINT [PK_TAIKHOAN] PRIMARY KEY CLUSTERED 
(
	[USERNAME] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[THUOC]    Script Date: 18/01/2024 13:17:38 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[THUOC](
	[MATHUOC] [char](4) NOT NULL,
	[TENTHUOC] [nvarchar](15) NOT NULL,
	[DONVITINH] [nvarchar](10) NOT NULL,
	[SOLUONGTON] [int] NOT NULL,
	[GIANHAPKHO] [money] NULL,
	[GIABAN] [money] NULL,
 CONSTRAINT [PK_THUOC] PRIMARY KEY CLUSTERED 
(
	[MATHUOC] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[THUOC_COUNTER]    Script Date: 18/01/2024 13:17:38 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[THUOC_COUNTER](
	[COUNTER] [int] NOT NULL,
 CONSTRAINT [PK_THUOC_COUNTER] PRIMARY KEY CLUSTERED 
(
	[COUNTER] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ADMIN]  WITH CHECK ADD  CONSTRAINT [FK_ADMIN_TAIKHOAN] FOREIGN KEY([USERNAME])
REFERENCES [dbo].[TAIKHOAN] ([USERNAME])
GO
ALTER TABLE [dbo].[ADMIN] CHECK CONSTRAINT [FK_ADMIN_TAIKHOAN]
GO
ALTER TABLE [dbo].[BACSI]  WITH CHECK ADD  CONSTRAINT [FK_BACSI_TAIKHOAN] FOREIGN KEY([USERNAME])
REFERENCES [dbo].[TAIKHOAN] ([USERNAME])
GO
ALTER TABLE [dbo].[BACSI] CHECK CONSTRAINT [FK_BACSI_TAIKHOAN]
GO
ALTER TABLE [dbo].[BENHSU]  WITH CHECK ADD  CONSTRAINT [FK_BENHSU_BACSI] FOREIGN KEY([MABACSI])
REFERENCES [dbo].[BACSI] ([MABACSI])
GO
ALTER TABLE [dbo].[BENHSU] CHECK CONSTRAINT [FK_BENHSU_BACSI]
GO
ALTER TABLE [dbo].[BENHSU]  WITH CHECK ADD  CONSTRAINT [FK_BENHSU_BENHNHAN] FOREIGN KEY([MABN])
REFERENCES [dbo].[BENHNHAN] ([MABN])
GO
ALTER TABLE [dbo].[BENHSU] CHECK CONSTRAINT [FK_BENHSU_BENHNHAN]
GO
ALTER TABLE [dbo].[CTDONTHUOC]  WITH CHECK ADD  CONSTRAINT [FK_CTDONTHUOC_BENHSU] FOREIGN KEY([MABN], [NGAYTAO])
REFERENCES [dbo].[BENHSU] ([MABN], [NGAYDIEUTRI])
GO
ALTER TABLE [dbo].[CTDONTHUOC] CHECK CONSTRAINT [FK_CTDONTHUOC_BENHSU]
GO
ALTER TABLE [dbo].[CTDONTHUOC]  WITH CHECK ADD  CONSTRAINT [FK_CTDONTHUOC_THUOC] FOREIGN KEY([MATHUOC])
REFERENCES [dbo].[THUOC] ([MATHUOC])
GO
ALTER TABLE [dbo].[CTDONTHUOC] CHECK CONSTRAINT [FK_CTDONTHUOC_THUOC]
GO
ALTER TABLE [dbo].[LICHHEN]  WITH CHECK ADD  CONSTRAINT [FK_LICHHEN_BACSI] FOREIGN KEY([MABACSI])
REFERENCES [dbo].[BACSI] ([MABACSI])
GO
ALTER TABLE [dbo].[LICHHEN] CHECK CONSTRAINT [FK_LICHHEN_BACSI]
GO
ALTER TABLE [dbo].[BENHNHAN]  WITH CHECK ADD CHECK  (([GIOITINH]=N'Nữ' OR [GIOITINH]='Nam'))
GO
/****** Object:  StoredProcedure [dbo].[uspAddDrug]    Script Date: 18/01/2024 13:17:38 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[uspAddDrug]
				@id CHAR(4),
				@name NVARCHAR(15),
				@unit NVARCHAR(10),
				@stock INT,
				@iPrice MONEY,
				@oPrice MONEY,
				@ResponseMessage NVARCHAR(100) OUTPUT -- Đầu ra
AS
BEGIN
	BEGIN TRY
		-- Kiểm tra thuốc có tồn tại chưa
		IF EXISTS ( SELECT * FROM THUOC
					WHERE @name = TENTHUOC)
			SET @ResponseMessage = 'already existed'
		ELSE
		BEGIN
			INSERT INTO THUOC(MATHUOC, TENTHUOC, DONVITINH, SOLUONGTON, GIANHAPKHO, GIABAN)
			VALUES (@id, @name, @unit, @stock, @iPrice, @oPrice)
			SET @ResponseMessage = 'successfully'
		END
	END TRY
	BEGIN CATCH
		SET @ResponseMessage = ERROR_MESSAGE();
	END CATCH
END
GO
/****** Object:  StoredProcedure [dbo].[uspAddUser]    Script Date: 18/01/2024 13:17:38 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[uspAddUser]
	@USERNAME VARCHAR(20),
    @PASSWORD VARCHAR(50), 
    @NGAYTAO DATE,
    @SIGNAL NVARCHAR(10),  -- Thêm tham số này để biết loại tài khoản
    @responseMessage NVARCHAR(250) OUTPUT
AS
BEGIN
    SET NOCOUNT ON
    BEGIN TRY
        INSERT INTO dbo.[TAIKHOAN] (USERNAME, PASSWORDHASH, NGAYKHOITAO, LOAITAIKHOAN)
        VALUES(@USERNAME, HASHBYTES('SHA2_512', @PASSWORD), @NGAYTAO, @SIGNAL)
        SET @responseMessage='Success'
    END TRY
    BEGIN CATCH
        SET @responseMessage=ERROR_MESSAGE() 
    END CATCH
END
GO
/****** Object:  StoredProcedure [dbo].[uspAddEmployee]    Script Date: 18/01/2024 13:17:38 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE OR ALTER PROCEDURE [dbo].[uspAddEmployee]
    @maNV CHAR(10), --cái này nó truyền cho BS hoặc DS, sau nó tự động cập nhật lại mã nhờ vô trigger đã cài đặt....
	@degree NVARCHAR(30),
	@email NVARCHAR(30),
	@name VARCHAR(50),
	@phone CHAR(10),
	@wage MONEY,
    @ResponseMessage NVARCHAR(100) OUTPUT -- Đầu ra
AS
BEGIN
	IF (@name = '' or
		@phone = '' or
		@wage <= 0)
	BEGIN
		SET @ResponseMessage = 'Invalid information'
		RETURN
	END
	BEGIN TRY
		DECLARE @lastestEmployee NVARCHAR(10);
		DECLARE @identifyCode NVARCHAR(10);
		DECLARE @username VARCHAR(20);
		DECLARE @currentDate DATE;
		DECLARE @temp NVARCHAR(50); --biến này để tạm thui
		IF @maNV ='BS'
		BEGIN
			DECLARE @nextId INT;
			DECLARE @temp1 int;
			IF NOT EXISTS (SELECT * FROM BACSI)
			BEGIN
				SET @temp1 = 1
			END
			ELSE
			BEGIN
				SELECT @nextId = MAX(ID) FROM BACSI
				DBCC CHECKIDENT('BACSI', RESEED, @nextId)
				SET @temp1 = @nextId + 1
			END
			SET @maNV = 'BS' + RIGHT('000' + CAST(@temp1 AS VARCHAR(3)), 3); --ghép tiền tố BS với 3 con số cuối lấy từ cột ID **
			
			INSERT INTO BACSI(MABACSI,HOCHAM,EMAIL_BS,HOTEN_BS,SDT_BS,LUONG)	--thêm vào bảng
			VALUES (@maNV, @degree, @email, @name, @phone, @wage);

			SET @lastestEmployee = dbo.GetLatestDoctorCode(); --lấy ra nhân viên vừa mới thêm
			SET @identifyCode = dbo.GetNumericFromCode(@lastestEmployee);  --lấy phần đuôi số định danh để tạo username, nghĩa là lấy phần ** từ bước trên đó
			
			SET @username = 'doctor' + @identifyCode; --ghép phần đuôi trên vô này để tạo username
			SET @currentDate = GETDATE();				--lấy ngày hiện tại
			EXEC dbo.uspAddUser @USERNAME = @username,		--chạy procedure tạo tài khoản
                    @PASSWORD = '123456@',
                    @NGAYTAO = @currentDate,
                    @SIGNAL = N'Bác sĩ',
                    @responseMessage = @temp OUTPUT;
			UPDATE BACSI	
			SET USERNAME = @username -- Cập nhật username vừa tạo vô bảng BACSI
			WHERE MABACSI = @lastestEmployee;

		END
		ELSE
		BEGIN
			--phần này làm tương tự như bác sĩ, tự xem
			DECLARE @temp2 int;
			IF NOT EXISTS (SELECT * FROM DUOCSI)
			BEGIN
				SET @temp2 = 1
			END
			ELSE
			BEGIN
				SELECT @nextId = MAX(ID) FROM DUOCSI
				SET @temp2 = @nextId + 1
				DBCC CHECKIDENT('DUOCCSI', RESEED, @nextId)
			END
			SET @maNV = 'DS' + RIGHT('000' + CAST(@temp2 AS VARCHAR(3)), 3);
			INSERT INTO DUOCSI(MADUOCSI,HOCHAM,EMAIL_DS,HOTEN_DS,SDT_DS,LUONG)
			VALUES (@maNV, @degree, @email, @name, @phone, @wage);
			SET @lastestEmployee = dbo.GetLatestPharCode(); --lấy ra nhân viên vừa mới thêm
			SET @identifyCode = dbo.GetNumericFromCode(@lastestEmployee);  --lấy phần đuôi số định danh để tạo username
			SET @username = 'pharmacist' + @identifyCode;
			SET @currentDate = GETDATE();
			EXEC dbo.uspAddUser @USERNAME = @username,
                    @PASSWORD = '123456@',
                    @NGAYTAO = @currentDate,
                    @SIGNAL = N'Dược sĩ',
                    @responseMessage = @temp OUTPUT;
			UPDATE DUOCSI
			SET USERNAME = @username -- Cập nhật username vừa tạo vô bảng DUOCSI
			WHERE MADUOCSI = @lastestEmployee;
		END
		SET @ResponseMessage = N'Success';
	END TRY
	BEGIN CATCH
		SET @ResponseMessage = ERROR_MESSAGE();
	END CATCH
END;
GO

/****** Object:  StoredProcedure [dbo].[uspCreateAppointment]    Script Date: 18/01/2024 13:17:38 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[uspCreateAppointment]
    @phoneNum CHAR(10),
    @date DATE,
    @period NVARCHAR(10),
    @doctorID CHAR(10),
    @patientName NVARCHAR(50),
    @email VARCHAR(30),
    @gender NVARCHAR(3),
    @address NVARCHAR(50),
    @service NVARCHAR(50),
    @responseMessage NVARCHAR(250)='' OUTPUT
AS
BEGIN
    IF NOT EXISTS (
        SELECT 1 
        FROM dbo.LICHHEN 
        WHERE SDT = @phoneNum AND NGAYKHAM = @date AND BUOIKHAM = @period
    )
    BEGIN
        INSERT INTO LICHHEN(SDT, NGAYKHAM, BUOIKHAM, MABACSI, TRANGTHAIHEN, HOTEN, EMAIL, GIOITINH, DIACHI, DICHVU)
        VALUES (@phoneNum, @date, @period, @doctorID, N'Chưa', @patientName, @email, @gender, @address, @service);
        SET @responseMessage='Inserting new appointment successfully';
    END
    ELSE
    BEGIN
        SET @responseMessage='Existing this appointment';
    END
END;
GO
/****** Object:  StoredProcedure [dbo].[uspFindDrug]    Script Date: 18/01/2024 13:17:38 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[uspFindDrug]
				@nameOrID NVARCHAR(50)
AS
BEGIN
			SELECT *
			FROM THUOC
			WHERE @nameOrID = MATHUOC
			UNION
			SELECT *
			FROM THUOC
			WHERE @nameOrID = TENTHUOC
END
GO
/****** Object:  StoredProcedure [dbo].[uspGetDoctorsID_Name]    Script Date: 18/01/2024 13:17:38 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[uspGetDoctorsID_Name]
AS
BEGIN
    SET NOCOUNT ON;
    -- Lấy danh sách bác sĩ từ bảng BACSI
    SELECT MABACSI AS hashtag, HOTEN_BS AS name
    FROM BACSI;
END
GO
/****** Object:  StoredProcedure [dbo].[uspGetEmployee]    Script Date: 18/01/2024 13:17:38 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE PROCEDURE [dbo].[uspGetEmployee]
AS
BEGIN
    SELECT * FROM BACSI
	UNION
	SELECT * FROM DUOCSI
END
GO
/****** Object:  StoredProcedure [dbo].[uspGetListDrug]    Script Date: 18/01/2024 13:17:38 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[uspGetListDrug]
AS
BEGIN
	SELECT *
	FROM THUOC
END
GO
/****** Object:  StoredProcedure [dbo].[uspGetListFeedback]    Script Date: 18/01/2024 13:17:38 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[uspGetListFeedback]
AS
BEGIN
	SELECT *
	FROM DANHGIA
END
GO
/****** Object:  StoredProcedure [dbo].[uspGetPatientFromAppointment]    Script Date: 18/01/2024 13:17:38 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[uspGetPatientFromAppointment]
    @date VARCHAR(100),
	@doctorID CHAR(10)
AS
BEGIN
	DECLARE @dateValue DATE;
	SET @dateValue = CAST(@date AS DATE);

	SELECT HOTEN,GIOITINH,SDT FROM LICHHEN
	WHERE NGAYKHAM = @dateValue
END;
GO
/****** Object:  StoredProcedure [dbo].[uspGetPatientsByDate]    Script Date: 18/01/2024 13:17:38 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[uspGetPatientsByDate]
	@date VARCHAR(100),
	@doctorID CHAR(10)
AS
BEGIN
	IF @doctorID = 'NULL'
	BEGIN
		SELECT DISTINCT BN.MABN, HOTEN_BN, CAST(BN.NGAYSINH AS VARCHAR) AS NGAYSINH, GIOITINH, SDT_BN, EMAIL_BN
		FROM BENHNHAN BN
		WHERE BN.MABN IN (SELECT BS.MABN
						 FROM BENHSU BS
						 WHERE NGAYDIEUTRI = CAST(@date AS DATE))
	END
	ELSE
	BEGIN
		SELECT DISTINCT BN.MABN, HOTEN_BN, CAST(BN.NGAYSINH AS VARCHAR) AS NGAYSINH, GIOITINH, SDT_BN, EMAIL_BN
		FROM BENHNHAN BN
		WHERE BN.MABN IN (SELECT BS.MABN
						 FROM BENHSU BS
						 WHERE NGAYDIEUTRI = CAST(@date AS DATE) AND BS.MABACSI = @doctorID)
	END
END
GO
/****** Object:  StoredProcedure [dbo].[uspLogin]    Script Date: 18/01/2024 13:17:38 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[uspLogin]
    @pLoginName VARCHAR(254),
    @pPassword VARCHAR(50),
    @responseMessage NVARCHAR(250)='' OUTPUT
AS
BEGIN
    SET NOCOUNT ON
    DECLARE @temp VARCHAR(254)


    IF EXISTS (SELECT USERNAME FROM TAIKHOAN WHERE USERNAME=@pLoginName)
    BEGIN
       SET @temp=(SELECT USERNAME FROM TAIKHOAN WHERE USERNAME=@pLoginName AND PASSWORDHASH=HASHBYTES('SHA2_512', @pPassword))
	   
       IF(@temp IS NULL)
           SET @responseMessage='Incorrect password'
       ELSE 
           SET @responseMessage='User successfully logged in'
    END
    ELSE
       SET @responseMessage='Invalid login'

END
GO
/****** Object:  StoredProcedure [dbo].[uspWriteFeedback]    Script Date: 18/01/2024 13:17:38 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE OR ALTER PROCEDURE [dbo].[uspWriteFeedback]
				@nameCustomer nvarchar(50),
				@phoneNumber nvarchar(50),
				@content nvarchar(250),
				@rating int,
				@responseMessage NVARCHAR(250)='' OUTPUT
AS
BEGIN
	IF (@nameCustomer = '' OR
		@phoneNumber = '' OR
		@content = '' OR
		@rating <= 0 )
	BEGIN
		SET @responseMessage = 'Invalid information'
		RETURN
	END
	DECLARE @temp int = (SELECT MAX(Id) from DANHGIA)
	DBCC CHECKIDENT('DANHGIA', RESEED, @temp)
	INSERT INTO DANHGIA(HOTEN, SDT, NOIDUNG, HAILONG)
	VALUES (@nameCustomer, @phoneNumber, @content, @rating)
	SET @responseMessage = 'Write successfully'
END
GO
USE [master]
GO
ALTER DATABASE [QLPHONGKHAM] SET  READ_WRITE 
GO
-- -------------------------------------
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE OR ALTER PROCEDURE [dbo].[uspDeleteEmployee]
    @maNV CHAR(10),
    @ResponseMessage NVARCHAR(100) OUTPUT
AS
BEGIN
    BEGIN TRY
        DECLARE @prefix VARCHAR(2) = LEFT(@maNV, 2);

        IF (@prefix = 'BS')
        BEGIN
            DELETE FROM BACSI
			WHERE MABACSI = @maNV
        END
        ELSE
        BEGIN
            DELETE FROM DUOCSI
			WHERE MADUOCSI = @maNV
        END

        SET @ResponseMessage = 'Xóa thành công';
    END TRY
    BEGIN CATCH
        SET @ResponseMessage = ERROR_MESSAGE();
    END CATCH
END;
