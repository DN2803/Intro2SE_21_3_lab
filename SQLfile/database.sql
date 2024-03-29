USE [master]
GO
/****** Object:  Database [QLPHONGKHAM]    Script Date: 21/12/2023 19:46:54 ******/
CREATE DATABASE [QLPHONGKHAM]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'QLPHONGKHAM', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER1\MSSQL\DATA\QLPHONGKHAM.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'QLPHONGKHAM_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER1\MSSQL\DATA\QLPHONGKHAM_log.ldf' , SIZE = 73728KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
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
/****** Object:  Table [dbo].[ADMIN]    Script Date: 21/12/2023 19:46:55 ******/
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
/****** Object:  Table [dbo].[BACSI]    Script Date: 21/12/2023 19:46:55 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[BACSI](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[MABACSI]  AS ('BS'+right('00'+CONVERT([varchar](3),[ID],0),(3))) PERSISTED NOT NULL,
	[HOTEN_BS] [nvarchar](50) NULL,
	[SDT_BS] [char](10) NULL,
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
/****** Object:  Table [dbo].[BENHNHAN]    Script Date: 21/12/2023 19:46:55 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[BENHNHAN](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[MABN]  AS ('BN'+right('00'+CONVERT([varchar](3),[ID],0),(3))) PERSISTED NOT NULL,
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
/****** Object:  Table [dbo].[BENHSU]    Script Date: 21/12/2023 19:46:55 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[BENHSU](
	[MABN] [varchar](5) NOT NULL,
	[NGAYDIEUTRI] [date] NOT NULL,
	[MABACSI] [varchar](5) NULL,
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
/****** Object:  Table [dbo].[CTDONTHUOC]    Script Date: 21/12/2023 19:46:55 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CTDONTHUOC](
	[MABN] [varchar](5) NOT NULL,
	[NGAYTAO] [date] NOT NULL,
	[MATHUOC] [varchar](5) NOT NULL,
	[SOLUONG] [int] NULL,
 CONSTRAINT [PK_CTDONTHUOC] PRIMARY KEY CLUSTERED 
(
	[MABN] ASC,
	[NGAYTAO] ASC,
	[MATHUOC] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[DANHGIA]    Script Date: 21/12/2023 19:46:55 ******/
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
/****** Object:  Table [dbo].[DUOCSI]    Script Date: 21/12/2023 19:46:55 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[DUOCSI](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[MADUOCSI]  AS ('DS'+right('00'+CONVERT([varchar](3),[ID],0),(3))) PERSISTED NOT NULL,
	[HOTEN_DS] [nvarchar](50) NULL,
	[SDT_DS] [char](10) NULL,
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
/****** Object:  Table [dbo].[LICHHEN]    Script Date: 21/12/2023 19:46:55 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[LICHHEN](
	[SDT] [char](10) NOT NULL,
	[NGAYKHAM] [date] NOT NULL,
	[GIOKHAM] [time](0) NOT NULL,
	[MABACSI] [varchar](5) NULL,
	[TRANGTHAIHEN] [nchar](10) NULL,
	[HOTEN] [nvarchar](50) NULL,
	[EMAIL] [varchar](30) NULL,
	[GIOITINH] [nvarchar](3) NULL,
	[DIACHI] [nvarchar](50) NULL,
	[NGAYSINH] [date] NULL,
 CONSTRAINT [PK_LICHHEN_1] PRIMARY KEY CLUSTERED 
(
	[SDT] ASC,
	[NGAYKHAM] ASC,
	[GIOKHAM] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TAIKHOAN]    Script Date: 21/12/2023 19:46:55 ******/
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
/****** Object:  Table [dbo].[THUOC]    Script Date: 21/12/2023 19:46:55 ******/
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
ALTER TABLE [dbo].[DUOCSI]  WITH CHECK ADD  CONSTRAINT [FK_DUOCSI_TAIKHOAN] FOREIGN KEY([USERNAME])
REFERENCES [dbo].[TAIKHOAN] ([USERNAME])
GO
ALTER TABLE [dbo].[DUOCSI] CHECK CONSTRAINT [FK_DUOCSI_TAIKHOAN]
GO
ALTER TABLE [dbo].[LICHHEN]  WITH CHECK ADD  CONSTRAINT [FK_LICHHEN_BACSI] FOREIGN KEY([MABACSI])
REFERENCES [dbo].[BACSI] ([MABACSI])
GO
ALTER TABLE [dbo].[LICHHEN] CHECK CONSTRAINT [FK_LICHHEN_BACSI]
GO
ALTER TABLE [dbo].[BENHNHAN]  WITH CHECK ADD CHECK  (([GIOITINH]=N'Nữ' OR [GIOITINH]='Nam'))
GO
/****** Object:  StoredProcedure [dbo].[uspAddUser]    Script Date: 21/12/2023 19:46:55 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[uspAddUser]
    @USERNAME VARCHAR(20), 
    @PASSWORD VARCHAR(50), 
	@NGAYTAO DATE,
	@responseMessage NVARCHAR(250) OUTPUT
AS
BEGIN
    SET NOCOUNT ON
    BEGIN TRY
        INSERT INTO dbo.[TAIKHOAN] (USERNAME, PASSWORDHASH, NGAYKHOITAO)
        VALUES(@USERNAME, HASHBYTES('SHA2_512', @PASSWORD), @NGAYTAO)
        SET @responseMessage='Success'
    END TRY
    BEGIN CATCH
        SET @responseMessage=ERROR_MESSAGE() 
    END CATCH
END
GO
/****** Object:  StoredProcedure [dbo].[uspLogin]    Script Date: 21/12/2023 19:46:55 ******/
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
USE [master]
GO
ALTER DATABASE [QLPHONGKHAM] SET  READ_WRITE 
GO
