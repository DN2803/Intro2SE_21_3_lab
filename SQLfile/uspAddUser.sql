USE [QLPHONGKHAM]
GO
/****** Object:  StoredProcedure [dbo].[uspAddUser]    Script Date: 1/18/2024 4:05:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
ALTER PROCEDURE [dbo].[uspAddUser]
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
